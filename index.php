<!DOCTYPE html>
<!-- <?php
      //クリックジャッキング対策
      header('X-FRAME-OPTIONS: SAMEORIGIN');
      ?> -->
<html lang="ja" prefix="og: https://ogp.me/ns#">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- meta情報 -->
  <title>ポジティ部 コーダーテストサイト</title>
  <meta name="description" content="当サイトはWeb制作アライズカラー（ARISE-COLOR)が作成しましたLPのサンプルサイトです。" />
  <meta name="keywords" content="キーワード" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#000000">
  <!-- テストサイトのためnoindex設定 -->
  <meta name="robots" content="noindex, nofollow">
  <!-- ogp -->
  <meta property="og:locale" content="ja_JP">
  <meta property="og:title" content="ポジティ部 コーダーテストサイト" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sample2.arise-color.com" />
  <meta property="og:image" content="https://sample2.arise-color.com/assets/images/screenshot.jpg" />
  <meta property="og:site_name" content="ポジティ部 コーダーテストサイト" />
  <meta property="og:description" content="当サイトはWeb制作アライズカラー（ARISE-COLOR)が作成しましたLPのサンプルサイトです。" />
  <!-- ファビコン -->
  <link rel="”icon”" href="" />
  <!-- css -->
  <link rel="stylesheet" href="./assets/css/styles.css">
  <!-- Web font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@700&family=Roboto&display=swap"
    rel="stylesheet">
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <!-- polyfill -->
  <script defer src="./assets/js/smoothscroll-polyfill.min.js"></script>
  <!-- JavaScript -->
  <script defer type="text/javascript" src="./assets/js/script.js"></script>
  <!-- 住所自動入力ライブラリ -->
  <script src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
</head>

<body>
  <header id="header" class="p-header js-about-action">
    <div class="p-header__inner l-inner">
      <!-- ヘッダーロゴ -->
      <h2 class="p-header__title js-header__title">
        <a href="#main-visual" class="p-header__logo">
          <img src="/assets/images/common/logo.png" alt="ロゴ">
        </a>
      </h2>

      <nav id="g-nav" class="p-g-nav p-header-nav js-drawer-open" aria-labelledby="nav-button">
        <div class="p-g-nav__container">
          <ul class="p-g-nav__items p-header-nav__items">
            <li class="p-g-nav__item p-g-nav__item--normal"><a class="u-hover-opacity" href="#about">宇宙のお仕事について</a></li>
            <li class="p-g-nav__item p-g-nav__item--normal"><a class="u-hover-opacity" href="#recuruit">宇宙飛行士募集</a></li>
            <li class="p-g-nav__item p-g-nav__item--normal"><a class="u-hover-opacity" href="#QandA">よくあるご質問</a></li>
            <li class="p-g-nav__item p-header-nav__contact"><a class="u-hover-shine" href="#contact">応募する</a></li>
          </ul>
        </div>
      </nav>
      <!-- ドロワーメニュー -->
      <div class="p-header__menu u-pc-hidden">
        <button id="nav-button" class="c-drawer js-drawer-button" aria-haspopup="true" aria-controls="header-nav"
          aria-expanded="false" tabindex="1" accesskey="m">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

  </header>

  <main>
    <!-- メインビジュアル -->
    <section id="main-visual" class="p-main-visual">
      <div class="p-main-visual__inner l-inner">
        <div class="p-main-visual__body">
          <h1 class="p-main-visual__title js-scrollInTrigger u-slideIn__FromLeft">宇宙飛行士<span>、</span>募集開始<span>。</span>
          </h1>
          <p class="p-main-visual__quotations">‘‘宇宙を知った人間は、<span>決して前と同じ人間ではいられない。’’</span></p>
          <p class="p-main-visual__author">By Rota Noz</p>
        </div>
      </div>
    </section>
    <!-- 宇宙のお仕事について -->
    <section id="about" class="p-about js-highlight-point">
      <div class="p-about__inner l-wide-inner">
        <h2 class="p-about__title p-section-title">
          <span class="p-section-title__en p-section-title__en--lato p-section-title__en--black">about</span>
          <span class="p-section-title__jp p-section-title__jp--center">宇宙のお仕事について</span>
        </h2>
        <ol class="p-about__items l-inner">
          <li class="p-about__item p-about-block js-scrollInTrigger u-fadeIn">
            <figure class="p-about-block__img">
              <img src="/assets/images/common/about1.jpg" alt="人類の未知の領域へ挑む">
            </figure>
            <div class="p-about-block__body">
              <h3 class="p-about-block__title">人類の未知の領域へ挑む</h3>
              <p class="p-about-block__text">
                さまざまな科学技術の発展に伴って、地球上における人類未踏の地は、今やほとんどなくなりました。<br>
                しかし、それだけ技術が進歩した現代にあってもなお、宇宙は人類にとってほぼそのすべてが未開拓です。<br>
                宇宙飛行士は、今も昔も変わらず、人類にとっての未知の領域に果敢に挑む、勇気あるチャレンジャーといえます。
              </p>
            </div>
          </li>

          <li class="p-about__item p-about-block js-scrollInTrigger u-fadeIn">
            <figure class="p-about-block__img">
              <img src="/assets/images/common/about2.jpg" alt="人々に夢や希望を与えられる">
            </figure>
            <div class="p-about-block__body">
              <h3 class="p-about-block__title">人々に夢や希望を与えられる</h3>
              <p class="p-about-block__text">
                これまで宇宙に行ったことのある人は、長い人類の歴史上でも600人ほどしかおらず、日本人に限れば、宇宙飛行士になれたのは、たったの11人です。<br>
                宇宙飛行士は、誰もが憧れる特別な職業であり、なれるのは、選ばれし一握りの限られた人だけです。<br>
                だからこそ、宇宙飛行士は、困難に打ち勝って夢を実現させた人として、人々の希望となることができます。
              </p>
            </div>
          </li>

          <li class="p-about__item p-about-block js-scrollInTrigger u-fadeIn">
            <figure class="p-about-block__img">
              <img src="/assets/images/common/about3.jpg" alt="世界中に仲間が出来る">
            </figure>
            <div class="p-about-block__body">
              <h3 class="p-about-block__title">世界中に仲間が出来る</h3>
              <p class="p-about-block__text">
                各国のクルーと、仕事でもプライベートでも、長い時間をともに過ごすことになりますので、生活習慣や価値観の違いなどに戸惑ったり、ストレスを感じることも多いかもしれません。<br>
                しかし、数々の困難を乗り越えていくなかで、宇宙飛行士たちの間には自然と信頼関係が芽生え、強固な絆で結ばれるといいます。
              </p>
            </div>
          </li>

        </ol>
      </div>
    </section>

    <!-- 宇宙飛行士募集 -->
    <section id="recuruit" class="p-recuruit js-highlight-point">
      <div class="p-recuruit__inner l-wide-inner">
        <h2 class="p-recuruit__title p-section-title">
          <span
            class="p-section-title__en p-section-title__en--lato p-section-title__en--white15 p-section-title__en--right">recuruit</span>
          <span
            class="p-section-title__jp p-section-title__jp--center js-slideInTrigger u-slideIn-FromLeft">宇宙飛行士募集</span>
        </h2>

        <div class="p-recuruit__textblock js-scrollInTrigger u-fadeIn">
          <p class="p-recuruit__text">夢がいっぱいの宇宙飛行士に<span>あなたもなってみませんか？</span></p>
          <p class="p-recuruit__text p-recuruit__text--en">Let’s Join Us!</p>
        </div>

        <div class="p-recuruit__body l-inner">
          <figure class="p-recuruit__img">
            <img src="/assets/images/common/recuruit-img.png" alt="宇宙飛行士募集">
          </figure>
          <div class="p-recuruit__form">
            <dl class="js-scrollInTrigger u-fadeIn">
              <dt>応募期間</dt>
              <dd>令和3年9月1日～9月30日<br>試験日程等は後日通知いたします。</dd>
              <dt>業種</dt>
              <dd>航空宇宙局・宇宙飛行士</dd>
              <dt>業務内容</dt>
              <dd>宇宙船の操縦<br>宇宙空間での様々な実験<br>宇宙空間から地上へライブ配信</dd>
              <dt>勤務地</dt>
              <dd>成田（宇宙・アメリカへの出張もあります。）</dd>
            </dl>
            <div class="p-recuruit__btn">
              <a href="#contact" class="c-btn-push">今すぐ応募する</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 宇宙飛行士のその後について -->
    <section id="career" class="p-career">
      <div class="p-career__inner l-wide-inner">
        <h2 class="p-career__title p-section-title">
          <span class="p-section-title__en p-section-title__en--lato p-section-title__en--white05">career</span>
          <span class="p-section-title__jp p-section-title__jp--left l-inner">宇宙飛行士のその後について</span>
        </h2>

        <div class="p-career__body l-inner">
          <p class="p-career__text js-scrollInTrigger u-fadeIn">
            生涯宇宙に携わり続けられる年齢を重ねて、やがて第一線を退く日が訪れても、宇宙飛行士として培った経験を生かして、その後の人生でも、また別のかたちで宇宙に携わることができます。
          </p>

          <ul class="p-career__items">
            <li class="p-career__item js-scrollInTrigger u-fadeIn">
              <figure class="p-career__img">
                <img src="/assets/images/common/career1.png" alt="講演会活動">
                <figcaption>講演会活動</figcaption>
              </figure>
            </li>
            <li class="p-career__item js-scrollInTrigger u-fadeIn">
              <figure class="p-career__img">
                <img src="/assets/images/common/career2.png" alt="国際連合宇宙部職員">
                <figcaption>国際連合宇宙部職員</figcaption>
              </figure>
            </li>
            <li class="p-career__item js-scrollInTrigger u-fadeIn">
              <figure class="p-career__img">
                <img src="/assets/images/common/career3.png" alt="大学で後進の育成">
                <figcaption>大学で後進の育成</figcaption>
              </figure>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Noza公式Instagram -->
    <section class="p-checkitout">
      <div class="p-checkitout__inner">
        <div class="p-checkitout__header l-wide-inner">
          <h2 class="p-checkitout__title p-section-title">
            <span
              class="p-section-title__en p-section-title__en--lato p-section-title__en--glay p-section-title__en--right">check
              it out</span>
            <span class="p-section-title__jp p-section-title__jp--center p-section-title__jp--black">
              <span class="p-section-title__jp--lato">noza</span>公式<span
                class="p-section-title__jp--lato">instagram</span>
            </span>
          </h2>
        </div>
        <div class="p-checkitout__body">
          <ul class="p-checkitout__items js-scrollInTrigger u-fadeIn">
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check1.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check2.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check3.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check4.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check5.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check6.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check7.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
            <li class="p-checkitout__item">
              <figure class="p-checkitout__img">
                <img src="/assets/images/common/check8.jpg" loading="lazy" alt="Noza公式Instagram">
              </figure>
            </li>
          </ul>
          <div class="p-checkitout__btn">
            <a href="#" class="c-btn-line">もっと見る</a>
          </div>
        </div>
      </div>
    </section>

    <!-- よくあるご質問 -->
    <section id="QandA" class="p-QandA js-highlight-point">
      <div class="p-QandA__inner l-inner">
        <h2 class="p-QandA__title p-section-title">
          <span class="p-section-title__en p-section-title__en--white20 p-section-title__en--center">q&a</span>
          <span class="p-section-title__jp p-section-title__jp--center">よくあるご質問</span>
        </h2>

        <div class="p-QandA__body">
          <dl class="p-QandA__items js-accordion">
            <div class="p-QandA__item js-accordion-trigger is-active js-scrollInTrigger u-fadeIn">
              <dt class="p-QandA__question">
                宇宙飛行士になるのは難しいと聞いたのですが、実際の所どうでしょうか？
              </dt>
              <dd class="p-QandA__answer is-open">
                宇宙飛行士の試験の難易度は確かに高いです。<br>
                しかし、宇宙飛行士になりたいアツい想いがあるのなら、ぜひご応募ください。
              </dd>
            </div>

            <div class="p-QandA__item js-accordion-trigger js-scrollInTrigger u-fadeIn">
              <dt class="p-QandA__question">
                人間は宇宙のどこまで行けるのでしょうか。
              </dt>
              <dd class="p-QandA__answer">
                1960年代~1970年代に人類が月面着陸に成功したのは有名な話です。<br>
                しかし地球から最も近い惑星である火星でさえも、人類は未だに足を踏み入れたことはありません。宇宙飛行士となり、共に可能性を切り開いていきましょう。
              </dd>
            </div>

            <div class="p-QandA__item js-accordion-trigger js-scrollInTrigger u-fadeIn">
              <dt class="p-QandA__question">
                お給料はいくらですか？
              </dt>
              <dd class="p-QandA__answer">
                初年度の総支給は年間600万円です。<br>
                ただし宇宙におけるミッション期間中はなんと、給料の100％がスペースミッション手当として支給されますので、お給料は倍になります！
              </dd>
            </div>

            <div class="p-QandA__item js-accordion-trigger js-scrollInTrigger u-fadeIn">
              <dt class="p-QandA__question">
                宇宙飛行士の仕事のやりがいは何ですか？
              </dt>
              <dd class="p-QandA__answer">
                宇宙飛行士は宇宙という未知の領域に果敢に挑み、人々に夢や希望をあたえることの出来る大変やりがいのある仕事です。
              </dd>
            </div>
          </dl>

          <div class="p-QandA__btn">
            <a href="#contact" class="c-btn-push">今すぐ応募する</a>
          </div>

        </div>
      </div>
    </section>

    <!-- 応募フォーム -->

    <section id="contact" class="p-contact js-highlight-point">
      <div class="p-contact__inner">

        <div class="p-contact__wrapper">
          <div class="p-contact__header">
            <h2 class="p-contact__title">応募フォーム</h2>
            <p id="contact-text" class="p-contact__text js-scrollInTrigger u-fadeIn">
              こちらは実際に送信できるようにしております。（自動返信メールが送信されます。お気軽にお試しください。）<br>
              管理者へのメールは送られないようにコメントアウト設定しており、アドレス収集等は行っておりませんのでご安心ください。<br>
              ネットに落ちているPHPファイルのコピペではなく、オリジナルのPHPを作成し、ajaxで画面遷移無しで入力画面→確認画面→完了画面が表示されるように作成致しました。<br>
              郵便番号からの住所自動入力は、「ajaxzip3」を使用しています。
            </p>
          </div>

          <div id="contactForm-input">
            <!-- 入力画面 -->
            <form id="sendmail" class="p-contact__form p-contactForm-input js-scrollInTrigger u-fadeIn"
              action="./mail.php" method="post" name="_inputForm">

              <p id="msg" class="p-contactForm-input__comment"></p>

              <div class="p-contactForm-input__item p-contactForm-input__item--input">
                <label for="name">
                  お名前
                  <span class="p-contactForm-input__required">必須</span>
                </label>
                <input type="text" id="name" name="_name" required="required" value="<?php echo $_SESSION['_name']?>" placeholder="お名前をご記入ください。">
                <div id="error_name" class="p-contactForm-input__error"></div>
              </div>

              <div class="p-contactForm-input__item p-contactForm-input__item--input">
                <label for="ruby">
                  フリガナ
                  <span class="p-contactForm-input__required">必須</span>
                </label>
                <input type="text" id="ruby" name="_ruby" required="required" value="<?php echo $_SESSION['_ruby']?>" placeholder="フリガナをご記入ください">
                <div id="error_ruby" class="p-contactForm-input__error"></div>
              </div>

              <div class="p-contactForm-input__item p-contactForm-input__item--input">
                <label for="email">
                  メールアドレス
                  <span class="p-contactForm-input__required">必須</span>
                </label>
                <input type="email" id="email" name="_email" inputmode="email" required="required" value="<?php echo $_SESSION['_email']?>"
                  placeholder="メールアドレスをご記入ください">
                <div id="error_email" class="p-contactForm-input__error"></div>
              </div>

              <div class="p-contactForm-input__item p-contactForm-input__item--input">
                <label for="address">
                  郵便番号
                </label>
                <input type="text" id="zipcode" name="_zipcode" maxlength="8" value="<?php echo $_SESSION['_zipcode']?>"
                  placeholder="例：1234567 or 123-4567" onkeyup="AjaxZip3.zip2addr( this,'','_address','_address' );">
              </div>

              <div class="p-contactForm-input__item p-contactForm-input__item--input">
                <label for="address">
                  ご住所
                </label>
                <input type="text" id="address" name="_address" value="<?php echo $_SESSION['_address']?>" placeholder="途中まで郵便番号から自動入力されます。">
              </div>

              <div class="p-contactForm-input__item p-contactForm-input__item--textarea">
                <label for="content">
                  お問い合わせ内容
                  <span class="p-contactForm-input__required">必須</span>
                </label>
                <textarea id="content" name="_content" required="required" value="<?php echo $_SESSION['_content']?>"
                  placeholder="お問い合わせのテスト文章をご自由にご記入ください"><?php echo nl2br($_SESSION['_content'])?></textarea>
                <div id="error_content" class="p-contactForm-input__error"></div>
              </div>

              <div class="p-contactForm-input__footer">
                <div class="p-contactForm-input__privacy">
                  <input type="checkbox" id="contact-privacy" name="contact-privacy" required
                    value="プライバシーポリシーに同意する"><label for="contact-privacy"
                    class="p-contactForm-input__privacylabel">プライバシーポリシーに同意する</label>
                </div>

                <div class="p-contactForm-input__btn">
                  <input type="submit" id="contact-submit" class="c-btn-contact" value="送信確認" disabled>
                </div>
              </div>
              <input type="hidden" name="_confirm" value="送信確認">

            </form>
          </div>

          <!-- 確認画面 -->
          <div id="contactForm-return">
            <!-- ajaxで返ってきた確認画面が表示されます -->
          </div>
        </div>
      </div>
    </section>

    <section class="p-end-visual">
      <div class="p-end-visual__inner">
        <div class="p-end-visual__wrapper">
          <figure class="p-end-visual__img">
            <img src="/assets/images/common/end-visual-img.jpg" loading="lazy" alt="宇宙を知った人間は決して前と同じ人間ではいられない。">
          </figure>
          <div class="p-end-visual__text">
            <h2 class="js-scrollInTrigger u-fadeIn">‘‘宇宙を知った人間は<br>
              決して前と同じ人間ではいられない。’’</h2>
            <p class="js-scrollInTrigger u-fadeIn">By Rota Noz </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- トップへ戻るボタン -->
  <div id="page-top" class="p-pagetop js-about-action">
    <img src="/assets/images/common/pagetop.png" alt="トップへ戻るボタン">
  </div>

  <!-- フッター -->
  <footer class="p-footer">
    <div class="p-footer__inner">
      <h2 class="p-footer__title">
        <a href="#main-visual" class="p-footer__logo">
          <img src="/assets/images/common/logo.png" alt="ロゴ">
        </a>
      </h2>
      <nav class="l-sns p-sns">
        <ul class="p-sns__items">
          <li class="p-sns__item"><a href="https://www.twitter.com/">
              <img src="/assets/images/common/twitter.png" alt="twitter">
            </a></li>
          <li class="p-sns__item"><a href="https://www.facebook.com/">
              <img src="/assets/images/common/facebook.png" alt="facebook">
            </a></li>
          <li class="p-sns__item"><a href="https://www.youtube.com/">
              <img src="/assets/images/common/youtube.png" alt="youtube">
            </a></li>
          <li class="p-sns__item"><a href="https://www.instagram.com">
              <img src="/assets/images/common/instagram.png" alt="instagram">
            </a></li>
        </ul>
      </nav>
    </div>

  </footer>

</body>

</html>