"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  /*********************************************************
   * ドロワーメニュー
  *********************************************************/
  $(".js-drawer").click(function () {
    $(this).toggleClass('active'); //

    $(".js-drawer-open").toggleClass('is-open');
  });
  $(".js-drawer-open a").click(function () {
    $(".js-drawer").removeClass('active');
    $(".js-drawer-open").removeClass('is-open');
  });
  $(".p-header__title a").click(function () {
    $(".js-drawer").removeClass('active');
    $(".js-drawer-open").removeClass('is-open');
  });
  /*********************************************************
   * 画面がリサイズされたらドロワーメニューを閉じる
   *********************************************************/

  $(window).on('resize', function () {
    $(".js-drawer").removeClass('active');
    $(".js-drawer-open").removeClass('is-open');
  });
  /*********************************************************
   * ボタンの表示設定＆ヘッダーの背景色変更
  *********************************************************/

  var topBtn = $('.p-pagetop');
  topBtn.hide();
  $(window).scroll(function () {
    var header = $('#header').innerHeight();
    var targetY = $('#about').offset().top - header;

    if ($(this).scrollTop() > targetY) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn(); // ヘッダーの背景

      $(".p-header").css("background-color", "rgba(0 ,0 ,0 ,0.8)");
      $(".p-header").css("transition", "all 0.3s");
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut(); // ヘッダーの背景色

      $(".p-header").css("background-color", "rgba(0 ,0 ,0 ,1)");
      $(".p-header").css("transition", "all 0.3s");
    }
  });
  /*********************************************************
   * ボタンをクリックしたらスクロールして上に戻る
  *********************************************************/

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400, 'swing');
    return false;
  });
  /*********************************************************
   * スムーススクロール
  *********************************************************/

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
  /*********************************************************
   * メインビジュアルの看板スライドイン
  *********************************************************/

  function slideIn() {
    $('.js-slideInTrigger').each(function () {
      var elemPos = $(this).offset().top - 50; //要素より、50px上

      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('u-slideIn-active'); // 画面内に入ったらu-slideInというクラス名を追記
      } else {// $(this).removeClass('u-slideIn-active');// 画面外に出たらu-slideInというクラス名を外す（一度しかアニメーションさせない場合は不要）
      }
    });
  }

  function slideInReady() {
    $('.js-slideInTrigger').each(function () {
      $(this).addClass('u-slideIn'); //準備として一旦表示を消す
    });
  }

  $(document).ready(function () {
    slideInReady(); //準備として一旦表示を消す
  });
  /*********************************************************
   * その場でフェードイン
   *********************************************************/

  function fadeAnime() {
    $('.js-fadeInTrigger').each(function () {
      var elemPos = $(this).offset().top - 50; //要素より、50px上

      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      $(this).addClass('u-fadeIn'); //準備として一旦表示を消す

      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('u-fadeIn-active'); // 画面内に入ったらu-fadeInというクラス名を追記
      } else {// $(this).removeClass('u-fadeIn-active');// 画面外に出たらfadeInというクラス名を外す（一度しかアニメーションさせない場合は不要）
      }
    });
  }

  $(window).on('load', function () {
    slideIn(); // 左からスライドイン

    fadeAnime(); //その場でフェードイン

    PositionCheck();
    /* 現在地を取得する関数を呼ぶ*/

    ScrollAnime();
    /* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
  });
  $(window).scroll(function () {
    fadeAnime(); //その場でフェードイン

    PositionCheck();
    /* 現在地を取得する関数を呼ぶ*/

    ScrollAnime();
    /* ナビゲーションに現在地のクラスをつけるための関数を呼ぶ*/
  });
  $(window).resize(function () {
    //リサイズされたときの処理
    PositionCheck();
  });
  /*********************************************************
   * ヘッダーメニューの現在地ハイライト(まだ未実装)
   *********************************************************/
  //基準点の準備

  var elemTop = []; //現在地を取得するための設定を関数でまとめる

  function PositionCheck() {
    //headerの高さを取得
    var headerH = $("#header").outerHeight(true); //.scroll-pointというクラス名がついたエリアの位置を取得する設定

    $(".js-highlight-point").each(function (i) {
      //.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
      elemTop[i] = Math.round(parseInt($(this).offset().top - headerH)); //追従するheader分の高さ（70px）を引き小数点を四捨五入
    });
  } //ナビゲーションに現在地のクラスをつけるための設定


  function ScrollAnime() {
    //スクロールした際のナビゲーションの関数にまとめる
    var scroll = Math.round($(window).scrollTop());
    var NavElem = $("#g-nav li"); //ナビゲーションのliの何番目かを定義するための準備

    $("#g-nav li").removeClass('current'); //全てのナビゲーションの現在地クラスを除去

    if (scroll >= 0 && scroll < elemTop[1]) {
      //スクロール値が0以上 .scroll-point 1つめ（area-1）の高さ未満
      $(NavElem[0]).addClass('current'); //1つめのliに現在地クラスを付与
    } else if (scroll >= elemTop[1] && scroll < elemTop[2]) {
      //.scroll-point 1つめ（area-1）以上.scroll-point 2つめ（area-2）未満
      $(NavElem[1]).addClass('current'); //2つめのliに現在地クラスを付与
    } else if (scroll >= elemTop[2] && scroll < elemTop[3]) {
      //.scroll-point 2つめ（area-2）以上.scroll-point 3つめ（area-3）未満
      $(NavElem[2]).addClass('current'); //3つめのliに現在地クラスを付与
    } else if (scroll >= elemTop[3]) {
      // .scroll-point 3つめ（area-3）以上
      $(NavElem[3]).addClass('current'); //4つめのliに現在地クラスを付与
    }
  }
});
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
/*********************************************************
 * 応募フォームの送信ボタンの非活性制御
*********************************************************/

var $form = document.getElementById('form');
var $submit = document.getElementById('contact-submit');
$form.addEventListener('change', update);
$form.addEventListener('input', update); // submitイベントで送信制御

$form.addEventListener('submit', function (e) {
  e.preventDefault();
});

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