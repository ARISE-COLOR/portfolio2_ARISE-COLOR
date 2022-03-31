"use strict";

jQuery(function ($) {
  /*********************************************************
   * メール送信（確認画面表示）
  *********************************************************/
  $(function () {
    // $('#sendmail').submit(function(event) {
    $(document).on("submit", '#sendMail-check', function (event) {
      var form = $(this);
      var url = form.attr('action');
      var method = form.attr('method');
      var serialize = form.serialize();
      var sendmode = document._confirmForm.onbtn.value;
      $.ajax({
        type: method,
        url: url,
        data: serialize,
        dataType: false,
        //通信結果を受け取らない場合はfalse
        beforeSend: function beforeSend(xhr, settings) {
          // ajax送信前の処理
          $(window).scrollTop($('#contact').position().top);
        },
        complete: function complete(xhr, status) {// ajax応答後の処理
        },
        success: function success(data) {
          // ajax通信成功時の処理
          if (sendmode == '_back') {
            $('#msg').html('恐れ入りますが、再度ご入力ください。');
            $('#contactForm-return').html(data);
            $('#contactForm-input').show('fast');
            $('#contact-text').show('fast'); // 送信ボタン
          } else if (sendmode == '_send') {
            $('#contactForm-return').html(data);
          }
        },
        error: function error(xhr, status, _error) {
          // ajax通信成失敗の処理
          $('#msg').html("通信エラーが発生しました。");
        }
      });
      return false;
    });
    $(document).on("submit", '#sendmail', function (event) {
      var form = $(this);
      var url = form.attr('action');
      var method = form.attr('method');
      var serialize = form.serialize();
      $.ajax({
        type: method,
        url: url,
        data: serialize,
        dataType: false,
        //通信結果を受け取らない場合はfalse
        beforeSend: function beforeSend(xhr, settings) {
          // ajax送信前の処理
          $(window).scrollTop($('#contact').position().top);
        },
        complete: function complete(xhr, status) {// ajax応答後の処理
        },
        success: function success(data) {
          // ajax通信成功時の処理
          //確認画面表示
          $('#contactForm-return').html(data); //入力画面非表示

          $('#contactForm-input').hide(); //入力画面標準テキストの非表示

          $('#contact-text').hide();
        },
        error: function error(xhr, status, _error2) {
          // ajax通信成失敗の処理
          $('#msg').html("通信エラーが発生しました。");
        }
      });
      return false;
    });
  });
}); // 以下、Vanilla JSで記載

/**********************************************
* iOS版Safariの100vh対応
**********************************************/

var setFillHeight = function setFillHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

var vw = window.innerWidth; // ガタつき防止に横幅変動時のみリサイズ

window.addEventListener('resize', function () {
  if (vw === window.innerWidth) {
    //画面幅に変動がなければ処理終了
    return;
  }

  vw = window.innerWidth;
  setFillHeight();
});
window.addEventListener('load', setFillHeight);
/*********************************************************
* ドロワーメニュー
*********************************************************/

var htmlBody = document.documentElement;
var drawer_button = document.querySelector('.js-drawer-button');
var g_nav = document.querySelector('.js-drawer-open'); // メニューボタンクリック時

drawer_button.addEventListener('click', function () {
  if (drawer_button.getAttribute('aria-expanded') == 'false') {
    // メニュー画面のサイズ最適化（iOS版Safariの100vh対応）
    setFillHeight(); // メニューボタンの属性変更（オープン）

    drawer_button.setAttribute('aria-expanded', 'true'); //メニューにis-openクラスを付与、is-closeクラス削除

    g_nav.classList.add('is-open');
    g_nav.classList.remove('is-close'); //スクロール禁止

    htmlBody.classList.add('is-fixed');
    document.addEventListener('touchmove', scroll_control, {
      passive: false
    });
  } else {
    // メニューボタンの属性変更（クローズ）
    drawer_button.setAttribute('aria-expanded', 'false'); //メニューのis-openクラスを削除、is-closeクラス付与

    g_nav.classList.add('is-close');
    g_nav.classList.remove('is-open'); // スクロール禁止を解除

    htmlBody.classList.remove('is-fixed');
    document.removeEventListener('touchmove', scroll_control, {
      passive: false
    });
  }
}); // メニュー項目選択時にメニューを閉じる処理

var header_nav = document.getElementById('header');
var g_nav_a = header_nav.querySelectorAll('a');
var g_nav_a_Arr = Array.prototype.slice.call(g_nav_a);
g_nav_a_Arr.forEach(function (navlink) {
  navlink.addEventListener('click', function (e) {
    if (drawer_button.getAttribute('aria-expanded') == 'false') {// メニューを開いていない場合は何もしない（PCモードを想定）
    } else {
      // メニューを閉じる処理
      // メニューボタンの属性変更（クローズ）
      drawer_button.setAttribute('aria-expanded', 'false'); //メニューのis-openクラスを削除、is-closeクラス付与

      g_nav.classList.add('is-close');
      g_nav.classList.remove('is-open'); // スクロール禁止を解除

      htmlBody.classList.remove('is-fixed');
      document.removeEventListener('touchmove', scroll_control, {
        passive: false
      });
    }
  });
});
/*--------------------------------------------------------
* スクロール禁止関連メソッド
--------------------------------------------------------*/
// js-drawer-openが親要素に入っているときのみスクロール禁止を解除

var scroll_control = function scroll_control(event) {
  if ($(event.target).closest('.js-drawer-open').length > 0) {
    event.stopPropagation();
  } else {
    event.preventDefault();
  }
};
/*--------------------------------------------------------
* リサイズにより、スマホ→PC時にメニュー関係閉じる
--------------------------------------------------------*/


var mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {
  // メディアクエリがtrueかどうかを確認
  if (e.matches) {
    // メニューボタンの属性変更（クローズ）
    drawer_button.setAttribute('aria-expanded', 'false'); //メニューのis-open、is-closeクラスを削除

    g_nav.classList.remove('is-open');
    g_nav.classList.remove('is-close'); // スクロール禁止を解除

    htmlBody.classList.remove('is-fixed');
    document.removeEventListener('touchmove', scroll_control, {
      passive: false
    });
  }
} // イベントリスナーを登録


mediaQuery.addEventListener('change', handleTabletChange); // 初期チェック

handleTabletChange(mediaQuery);
/*********************************************************
 * ボタンをクリックしたらスクロールして上に戻る
*********************************************************/

var pageTopBtn = document.querySelector('#page-top');
pageTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
/*********************************************************
 * スムーススクロール
*********************************************************/

var interval_ms = 10; //動作の時間間隔（ミリ秒）

var move_division = 10.0; //動作の移動割合

var headerH = document.getElementById('header');
var gap = headerH.offsetHeight; //ヘッダーの高さを取得

var y_shift = gap; //ヘッダー分高さをずらす

var y_threhold = 1;
var y_diff;
var y;
var y_target;
var count;
var selectedTarget;
var previousTarget;
var isMoving = false;
var aTags = document.querySelectorAll("a");
aTags.forEach(function (aTag) {
  aTag.onclick = function () {
    document.querySelector("html").style.scrollBehavior = "auto";
    var hrefTarget = aTag.getAttribute("href");

    if (hrefTarget != null) {
      var firstCharactor = hrefTarget.substr(0, 1);

      if (firstCharactor == "#") {
        var targetName = hrefTarget.substr(1);

        if (previousTarget == targetName && isMoving == false || previousTarget != targetName) {
          isMoving = true;
          selectedTarget = targetName;
          aTag.removeAttribute("href");
          count = 0;
          console.log(" click:", targetName);
          scroll_start(targetName, aTag);
          previousTarget = targetName;
        } else {
          console.log("moving:", targetName);
          aTag.removeAttribute("href");
        }
      }
    }
  };
});

function scroll(p_target, aTag) {
  if (p_target == selectedTarget) {
    count += 1;
    var y_move = y_diff / move_division;
    y += y_move;
    scrollTo(0, y);
    y_diff = y_target - y;

    if (y_diff < 0 && y_target < y || 0 < y_diff && y < y_target) {
      if (Math.abs(y_diff) >= y_threhold) {
        setTimeout(function () {
          scroll(p_target, aTag);
        }, interval_ms);
      } else {
        scrollTo(0, y_target);
        document.querySelector("html").style.scrollBehavior = "smooth";
        isMoving = false;
        console.log("   end:", p_target);
      }

      if (count >= 2) {
        aTag.setAttribute("href", "#" + p_target);
      }
    } else {
      if (count == 1) {
        setTimeout(function () {
          scroll(p_target, aTag);
        }, interval_ms);
      } else {
        aTag.setAttribute("href", "#" + p_target);
        document.querySelector("html").style.scrollBehavior = "smooth";
        isMoving = false;
        console.log("   end:", p_target);
      }
    }
  } else {
    aTag.setAttribute("href", "#" + p_target);
    console.log("cancel:", p_target);
  }
}

function scroll_start(p_target, aTag) {
  y = window.pageYOffset;
  y_diff = parseInt(document.getElementById(p_target).getBoundingClientRect().top);
  y_target = y_diff + y - y_shift;
  scroll(p_target, aTag);
}
/********************************************************
 * フェードイン／フェードアウト
 * ------------------------------------------------------
 * 機能：特定のクラスに対して、フェードイン／アウト効果を付与
 * ----------------------------------------------------
 * 処理：対象のCSSにアニメーション設定を付与
 * ------------------------------------------------------
 * 注意事項：utilityフォルダの【_u-js-fadeIn_fadeOut】とセット
 * ------------------------------------------------------
 * 使い方：
 * fadeIn(【ターゲット】, 【デュレーション】, 【イージング】);
 * fadeIn(【ターゲット】, 【デュレーション】, 【イージング】);
 * 
 * フェードイン例
 * fadeIn(document.querySelector('.js-fadeIn'));
 * fadeIn(document.querySelector('.js-fadeIn'), 1000, 'ease-in');
 * フェードアウト例
 * fadeOut(document.querySelector('.js-fadeOut'));
 * fadeOut(document.querySelector('.js-fadeOut'), 2000, 'linear');
*********************************************************/


function fadeIn(target, duration, ease) {
  var motion = "fade-in";
  target.style.display = 'block';
  animation(target, duration, ease, motion);
}

function fadeOut(target, duration, ease) {
  var motion = 'fade-out';
  animation(target, duration, ease, motion);
  target.addEventListener('animationend', function () {
    target.style.display = 'none';
  });
}

function animation(target, duration, ease, motion) {
  if (/^-?[0-9]+$/.test(duration)) {
    duration = duration + 'ms';
  } else {
    duration = '400ms';
  }

  target.style.animation = [motion, "forwards", duration, ease].join(" ");
}
/********************************************************
 * 『#about』セクションでヘッダー透過度変更＆トップへ戻るボタン表示
 * ------------------------------------------------------
 * 機能：【js-about-action】に対して、
 *        『#about』セクションが画面上部（ヘッダー分引く）
 *         に要素が入ったら『action』クラス付与
 * ------------------------------------------------------
 * 本サイトでの設定箇所：
 * p-haader(ヘッダー)の背景色透過度変更
 * p-pagetop(topへ戻るボタン)の表示、非表示切り替え
*********************************************************/


var aboutTrigger = document.querySelectorAll('.js-about-action'); // スライドで表示させる要素の取得

var pageTop = document.getElementById('page-top');
var headerHight = document.getElementById('header').offsetHeight;
var aboutSection = document.getElementById('about').getBoundingClientRect();
var aboutWindowY = window.pageYOffset; // ウィンドウのスクロール位置を取得

var aboutSectionTop = aboutSection.top + aboutWindowY;

function aboutSectionScroll() {
  aboutWindowY = window.pageYOffset; // ウィンドウのスクロール位置を取得

  for (var i = 0; i < aboutTrigger.length; i++) {
    if (aboutWindowY > aboutSectionTop - headerHight) {
      aboutTrigger[i].classList.add('action');
    } else {
      aboutTrigger[i].classList.remove('action');
    }
  }
}

window.addEventListener('scroll', aboutSectionScroll);
window.addEventListener('load', aboutSectionScroll);
/********************************************************
 * スクロールインアニメーション【js-scrollInTrigger】
 * ------------------------------------------------------
 * 機能：『js-scrollInTrigger』に対して、
 *        画面内に要素が入ったら『show』クラス付与
*********************************************************/

var scrollInAnime = document.querySelectorAll('.js-scrollInTrigger'); // スライドで表示させる要素の取得

var scrollInAnimeRect = []; // 要素の位置を入れるための配列

var scrollInAnimeTop = []; // 要素の位置を入れるための配列

var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得

var windowH = window.innerHeight; // ウィンドウの高さを取得

var scrollInAnime_remainder = 100; // 少し表示してからアニメーションスタートする縦幅
// 要素の位置を取得

for (var i = 0; i < scrollInAnime.length; i++) {
  scrollInAnimeRect.push(scrollInAnime[i].getBoundingClientRect());
}

for (var i = 0; i < scrollInAnimeRect.length; i++) {
  scrollInAnimeTop.push(scrollInAnimeRect[i].top + windowY);
} // ウィンドウがリサイズされたら、ウィンドウの高さを再取得


window.addEventListener('resize', function () {
  windowH = window.innerHeight;
}); // スクロールアニメーション処理

function scrollInProcessing() {
  // スクロール位置を取得
  windowY = window.pageYOffset;

  for (var i = 0; i < scrollInAnime.length; i++) {
    // 要素が画面の下端にかかったら
    if (windowY > scrollInAnimeTop[i] - windowH + scrollInAnime_remainder) {
      // .showを付与
      scrollInAnime[i].classList.add('show');
    } else {// 逆に.showを削除（一度きりの場合は削除しない）
      // scrollInAnime[i].classList.remove('show');
    }
  }
} // スクロールされたら


window.addEventListener('scroll', scrollInProcessing); //画面読み込みされたら

window.addEventListener('load', scrollInProcessing); //HTMLの読み込み直後なら下記
//しかし、これだとcssの読み込み前に実行されてしまうため、要素の高さ等が関係しているjavascriptだと、このイベントは不適切になる
// window.addEventListener('DOMContentLoaded', scrollInProcessing);

/*********************************************************
 * Q＆A アコーディオン
*********************************************************/
// 要素をスライドしながら非表示にする関数(jQueryのslideUpと同じ)

var slideUp = function slideUp(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(function () {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
    el.classList.remove("is-open");
  }, duration);
}; // 要素をスライドしながら表示する関数(jQueryのslideDownと同じ)


var slideDown = function slideDown(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  el.classList.add("is-open");
  el.style.removeProperty("display");
  var display = window.getComputedStyle(el).display;

  if (display === "none") {
    display = "flex";
  }

  el.style.display = display;
  var height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(function () {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
}; // 要素をスライドしながら交互に表示/非表示にする関数(jQueryのslideToggleと同じ)


var slideToggle = function slideToggle(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
}; // アコーディオンを全て取得


var accordions = document.querySelectorAll(".js-accordion"); // 取得したアコーディオンをArrayに変換(IE対策)

var accordionsArr = Array.prototype.slice.call(accordions);
accordionsArr.forEach(function (accordion) {
  // Triggerを全て取得
  var accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger"); // TriggerをArrayに変換(IE対策)

  var accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);
  accordionTriggersArr.forEach(function (trigger) {
    // Triggerにクリックイベントを付与
    trigger.addEventListener("click", function (e) {
      accordionTriggersArr.forEach(function (trigger) {
        // クリックしたアコーディオン以外を全て閉じる
        if (trigger !== e.target.parentElement) {
          trigger.classList.remove("is-active");
          var openedContent = trigger.querySelector(".p-QandA__answer");
          slideUp(openedContent);
        }
      }); // '.is-active'クラスを付与or削除

      trigger.classList.toggle("is-active"); // 開閉させる要素を取得

      var content = trigger.querySelector(".p-QandA__answer"); // 要素を展開or閉じる

      slideToggle(content);
    });
  });
});
/****************************************************************
 * 応募フォームのバリデーションチェック＆送信ボタンの非活性制御
*****************************************************************/
// function setformvalidation() {

var $form = document.getElementById('sendmail');
var $submit = document.getElementById('contact-submit');
/* form element */

var $form_name = $form.elements['_name'];
var $form_ruby = $form.elements['_ruby']; // const $form_DOB = $form.elements['_DOB'];

var $form_email = $form.elements['_email'];
var $form_address = $form.elements['_address'];
var $form_content = $form.elements['_content'];
/* error element */

var $error_name = document.getElementById("error_name");
var $error_ruby = document.getElementById("error_ruby"); // const $error_DOB = document.getElementById("error_DOB")

var $error_email = document.getElementById("error_email");
var $error_address = document.getElementById("error_address");
var $error_content = document.getElementById("error_content");
/* バリデーションパターン */

var rubyValid = /^[ァ-ヶー　]+$/; //フリガナ

var emailValid = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/; //メールアドレス
// }

/*--------------------------------
 * お名前バリデーションチェック
--------------------------------*/

$form_name.addEventListener('change', function (e) {
  $form_name.setCustomValidity('');
  $form_name.classList.remove("is-error");

  if ($form_name.value == "") {
    $form_name.setCustomValidity('お名前が入力されていません。');
    $form_name.classList.add("is-error");
  }

  $error_name.innerHTML = $form_name.validationMessage;
});
/* リアルタイムチェック(入力中はエラーを消す) */

$form_name.addEventListener('input', function (e) {
  $form_name.setCustomValidity('');

  if ($form_name.value == "") {
    $form_name.setCustomValidity(' ');
    $form_name.classList.add("is-error");
  } else {
    $form_name.classList.remove("is-error");
  }

  $error_name.innerHTML = $form_name.validationMessage;
});
/*--------------------------------
 * フリガナバリデーションチェック
--------------------------------*/

/* 入力後チェック */

$form_ruby.addEventListener('change', function (e) {
  $form_ruby.setCustomValidity('');
  $form_ruby.classList.remove("is-error");

  if ($form_ruby.value == "") {
    $form_ruby.setCustomValidity('フリガナが入力されていません。');
    $form_ruby.classList.add("is-error");
  } else if (!rubyValid.test($form_ruby.value)) {
    $form_ruby.setCustomValidity('全角カタカナで入力してください。');
    $form_ruby.classList.add("is-error");
  }

  $error_ruby.innerHTML = $form_ruby.validationMessage;
});
/* リアルタイムチェック(入力中はエラーを消す) */

$form_ruby.addEventListener('input', function (e) {
  $form_ruby.setCustomValidity('');

  if ($form_ruby.value == "") {
    $form_ruby.setCustomValidity(' ');
    $form_ruby.classList.add("is-error");
  } else {
    $form_ruby.classList.remove("is-error");
  }

  $error_ruby.innerHTML = $form_ruby.validationMessage;
});
/*--------------------------------
 * メールアドレスバリデーションチェック
--------------------------------*/

/* 入力後チェック */

$form_email.addEventListener('change', function (e) {
  $form_email.setCustomValidity('');
  $form_email.classList.remove("is-error");

  if ($form_email.value == "") {
    $form_email.setCustomValidity('メールアドレスが入力されていません。');
    $form_email.classList.add("is-error");
  } else if (!emailValid.test($form_email.value)) {
    if (!e.target.validationMessage) {
      $form_email.setCustomValidity('メールアドレスの形式で入力されておりません。');
    }

    $form_email.classList.add("is-error");
  }

  $error_email.innerHTML = $form_email.validationMessage;
});
/* リアルタイムチェック(入力中はエラーを消す) */

$form_email.addEventListener('input', function (e) {
  $form_email.setCustomValidity('');

  if ($form_email.value == "") {
    $form_email.setCustomValidity(' ');
    $form_email.classList.add("is-error");
  } else {
    $form_email.setCustomValidity(' ');
    $form_email.classList.remove("is-error");
  }

  $error_email.innerHTML = $form_email.validationMessage;
});
/*--------------------------------
 * お問い合わせ内容バリデーションチェック
--------------------------------*/

$form_content.addEventListener('change', function (e) {
  $form_content.setCustomValidity('');
  $form_content.classList.remove("is-error");

  if ($form_content.value == "") {
    $form_content.setCustomValidity('お問い合わせ内容が入力されていません。');
    $form_content.classList.add("is-error");
  }

  $form_content.innerHTML = $form_address.validationMessage;
});
/* リアルタイムチェック(入力中はエラーを消す) */

$form_content.addEventListener('input', function (e) {
  $form_content.setCustomValidity('');

  if ($form_content.value == "") {
    $form_content.setCustomValidity(' ');
    $form_content.classList.add("is-error");
  } else {
    $form_content.classList.remove("is-error");
  }

  $form_content.innerHTML = $form_content.validationMessage;
});
/*--------------------------------
 * 送信ボタンの非活性制御
--------------------------------*/

$form.addEventListener('change', update);
$form.addEventListener('input', update); // submitイベントで送信制御
// $form.addEventListener('submit', (e) => {
//   e.preventDefault(); //デフォルトのイベントをキャンセル
//   //送信前に処理したい内容をここに記述
//   document._inputForm.submit();//submit実行
// });

function update(e) {
  // バリデーションが総合的に通っているかどうかのフラグ
  var isValid = $form.checkValidity();

  if (isValid) {
    // 通っていれば活性化
    $submit.removeAttribute('disabled');
    return;
  } // 通っていなければ非活性にする


  $submit.setAttribute('disabled', 'disabled');
}