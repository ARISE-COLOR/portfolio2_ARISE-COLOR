<?php
  session_start();
  //クリックジャッキング対策
  header('X-FRAME-OPTIONS: SAMEORIGIN');
  // ここからボタンによってモードを切り替える
  // 初期設定は入力モード
  $mode = 'input';
  //  確認画面から『戻る』を選択した場合
   if (isset($_POST['onbtn']) && $_POST['onbtn'] == '_back') {
      $_SESSION = array(); //セッション情報クリア
      // 戻る画面表示モード
      $mode = 'back';

      // 入力画面から『送信内容確認』を選択した場合（確認モード）
    } elseif (isset($_POST['_confirm']) && $_POST['_confirm']) {
      // サニタイズ
      $_SESSION['_name']    = htmlspecialchars($_POST['_name'], ENT_QUOTES);
      $_SESSION['_ruby']    = htmlspecialchars($_POST['_ruby'], ENT_QUOTES);
      // $_SESSION['_DOB']     = htmlspecialchars($_POST['_DOB'], ENT_QUOTES);
      $_SESSION['_email']   = htmlspecialchars($_POST['_email'], ENT_QUOTES);
      $_SESSION['_zipcode'] = htmlspecialchars($_POST['_zipcode'], ENT_QUOTES);
      $_SESSION['_address'] = htmlspecialchars($_POST['_address'], ENT_QUOTES);
      $_SESSION['_content'] = htmlspecialchars($_POST['_content'], ENT_QUOTES);

      //トークン生成
      // セッションIDを使用する場合
      // $session_id  = htmlspecialchars( session_id(), ENT_QUOTES, 'UTF-8' );
      // $token = sha1( $session_id );

      // ワンタイムトークンを使用する場合（今回はこちらを採用）
      $token = bin2hex(random_bytes(32));
      $_SESSION['token'] = $token;
      // 確認画面表示モード
      $mode = 'confirm';


//  確認画面から『送信』を選択した場合（送信モード）
    } elseif (isset($_POST['onbtn']) && $_POST['onbtn'] == '_send') {

      // トークン情報が無い場合orメールアドレスが無い場合
      if (!$_POST['token'] || !$_SESSION['token'] || !$_SESSION['_email']) {
        $errormessage = '不正な処理が行われました';
        $_SESSION = array(); //セッション情報クリア
        $mode = 'errorBack'; //入力画面に戻す

      //トークンが一致しなかった場合
      }else if ($_POST['token'] != $_SESSION['token']) { 
      // }else if ($_POST['token'] == $_SESSION['token']) { //エラーモード検証用
        $errormessage = '不正な処理が行われました';
        $_SESSION = array(); //セッション情報クリア
        $mode = 'errorBack'; //入力画面に戻す
      
      // トークン一致
      } else {


        // 送信処理


        // 変数とタイムゾーンを初期化
        $header = null;
        $form = null;
        $msg = null;
        $result_auto = null;
        $result_admin = null;
        $auto_reply_subject = null;
        $auto_reply_text = null;
        $admin_reply_subject = null;
        $admin_reply_text = null;
        date_default_timezone_set('Asia/Tokyo');

        //日本語の使用宣言
        mb_language("ja");
        mb_internal_encoding("UTF-8");
        $header = "MIME-Version: 1.0\n";
        $header = "Content-Type: text/plain\n";
        //送信元のアドレス設定
        $from = "arisecolor.info@gmail.com";
        $header .= "From: {$from}\r\nReply-To: {$from}\r\n";

        // 件名を設定
        $auto_reply_subject = '【自動返信】アライズカラーの送信テストです。';

        // 本文を設定
$auto_reply_text = <<< EOM

この度はアライズカラーのポートフォリオをご確認いただき、ありがとうございます。
また、メール送信のご確認までしていただき、誠にありがとうございます。

実案件では、取引企業様から頂いたご指定のテンプレートでの実装が中心ですが、今回はポートフォリオ用に自作したものを使用致しました。
自作のものを使用することは無いかと存じますが、当方の制作スキルのご参考にしていただければと存じます。

是非とも業務提携の件ご検討の程、よろしくお願い致します。
※こちらのメールアドレスは、ご返信いただくこともできるアドレスです。

お問い合わせ内容
=====================================

EOM;

$auto_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
$auto_reply_text .= "お名前：" . $_SESSION['_name'] . "\n";
$auto_reply_text .= "お名前（フリガナ）：" . $_SESSION['_ruby'] . "\n";
$auto_reply_text .= "メールアドレス：" . $_SESSION['_email'] . "\n";
$auto_reply_text .= "郵便番号：" . $_SESSION['_zipcode'] . "\n";
$auto_reply_text .= "住所：" . $_SESSION['_address'] . "\n";
$auto_reply_text .= "お問い合わせ内容：" . ($_SESSION['_content']) . "\n\n";

$auto_reply_text .= <<< EOM

この度はお問い合わせを頂き、重ねてお礼申し上げます。
■□■────────────────■□■
アライズカラー（ARISE-COLOR）
田邉　貴之
Takayuki Tanabe
Email：arisecolor.info@gmail.com
■□■────────────────■□■

EOM;

        //自動返信メール送信
        $result_auto = mb_send_mail($_SESSION['_email'], $auto_reply_subject, $auto_reply_text, $header);



//         // 運営側へ送るメールの件名
//         $admin_reply_subject = "宇宙LPサイトへのお問い合わせがありました。";

// // 本文を設定
// $admin_reply_text = <<< EOM

// お問い合わせ内容は下記の通りです
// ==========================================

// EOM;

// $admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
// $admin_reply_text .= "お名前：" . $_SESSION['_name'] . "\n";
// $admin_reply_text .= "お名前（フリガナ）：" . $_SESSION['_ruby'] . "\n";
// $admin_reply_text .= "メールアドレス：" . $_SESSION['_email'] . "\n";
// $admin_reply_text .= "郵便番号：" . $_SESSION['_zipcode'] . "\n";
// $admin_reply_text .= "住所：" . $_SESSION['_address'] . "\n";
// $admin_reply_text .= "お問い合わせ内容：" . ($_SESSION['_content']) . "\n\n";

//         // 管理者へメール送信
//         $result_admin = mb_send_mail($from, $admin_reply_subject, $admin_reply_text, $header);

        if ($result_auto) {
          $msg = "正常にメールを送信しました。";
        } else {
          $msg = "自動返信メールの送信に失敗しました。";
        };
        // if ($result_admin) {
        //   $msg = "正常にメールを送信しました。";
        // } else {
        //   $msg = "管理者メールの送信に失敗しました。";
        // };
        
        //セッション情報のクリア
        $_SESSION = array();
        // 完了画面表示モード
        $mode = 'send';
      }
    }
  ?>


<?php if ($mode == 'back') { ?>
  <!-- 入力画面に戻す -->

<?php } elseif ($mode == 'confirm') { ?>

  <!-- 確認画面 -->
  <form id="sendMail-check" class="p-contactForm-confirm js-fadeInTrigger" action="./mail.php" method="post" name="_confirmForm">
  
    <p class="p-contactForm-confirm__title">送信内容をご確認ください</p>
    <p class="p-contactForm-confirm__text">ご入力いただいたメールアドレスへ自動返信メールが送信されますが、管理者側にはメールが送られません。</p>

    <div class="p-contactForm-confirm__item p-contactForm-confirm__item--input">
      <label>お名前<span class="p-contactForm-confirm__required">必須</span>
      </label>
        <input type="text" disabled value="<?php echo $_SESSION['_name'] ?>">
    </div>

    <div class="p-contactForm-confirm__item p-contactForm-confirm__item--input">
      <label>フリガナ<span class="p-contactForm-confirm__required">必須</span>
      </label>
        <input type="text" disabled value="<?php echo $_SESSION['_ruby'] ?>">
    </div>

    <!-- <div class="p-contactForm-confirm__item p-contactForm-confirm__item--input">
      <label>生年月日</label>
        <input type="date" disabled value="<?php //echo $_SESSION['_DOB'] ?>">
    </div> -->

    <div class="p-contactForm-confirm__item p-contactForm-confirm__item--input">
      <label>メールアドレス<span class="p-contactForm-confirm__required">必須</span>
      </label>
        <input type="email" disabled value="<?php echo $_SESSION['_email'] ?>">
    </div>

    <div class="p-contactForm-confirm__item p-contactForm-confirm__item--input">
      <label>郵便番号</label>
        <input type="text" disabled value="<?php echo $_SESSION['_zipcode'] ?>">
    </div>

    <div class="p-contactForm-confirm__item p-contactForm-confirm__item--input">
      <label>ご住所</label>
        <input type="text" disabled value="<?php echo $_SESSION['_address'] ?>">
    </div>

    <div class="p-contactForm-confirm__item p-contactForm-confirm__item--textarea">
      <label>お問い合わせ内容<span class="p-contactForm-confirm__required">必須</span></label>
      <textarea type="text" disabled><?php echo $_SESSION['_content'] ?></textarea>
    </div>

    <!-- 選択ボタン -->
    <div class="p-contactForm-confirm__footer">
      <input class="c-btn-contact" type="submit" name="_back" value="戻る" onclick="set_sendmode('_back')">
      <input class="c-btn-contact" type="submit" name="_send" value="送信" onclick="set_sendmode('_send')">
    </div>

    <!-- jsで送信モードを取得するため、一旦onbtnに格納 -->
    <input type="hidden" name="onbtn">
    <script>
      function set_sendmode(s_val) {
        document._confirmForm.onbtn.value = s_val;
      }
    </script>

    <!-- トークン用 -->
    <input type="hidden" name="token" value="<?php echo $_SESSION['token'] ?>">

  </form>
  
<?php } elseif ($mode == 'send') { ?>
  <!-- 完了画面 -->
<div class="p-contactForm-complete">
  <p class="p-contactForm-complete__title">送信完了</p>
  <p class="p-contactForm-complete__comment">
    送信機能をお試しいただき、ありがとうございます。
  </p>
</div>

<?php } elseif ($mode == 'errorBack') { ?>
  <div class="p-contactForm-errorBack">
    <p class="p-contactForm-errorBack__title">送信エラー</p>
    <p class="p-contactForm-errorBack__comment">
      恐れ入りますが、ページを再読み込みした上で再度送信をお願い致します。
    </p>
  </div>
<?php } ?>

<?php //print_r($_POST); ?>
<?php //print_r($_SESSION); ?>