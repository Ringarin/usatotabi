$(function(){
    // ハンバーガーのクリックアニメーション
    // $(".openbtn1").click(function () {
    //     $(this).toggleClass('active');
    // });

    // ハンバーガーのナビゲーション表示
    $(".openbtn1").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
          $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
          $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
      });
      
      $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
          $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
          $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
          $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
      });

    // ヘッダーが途中から出現
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });

    // お知らせのスライダー
        $(".regular_2").slick({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true
        });
        
    // #page-topをクリックした際の設定
    $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 1000);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
    });

    // PLANのスムーススクロール
    $("main .contents .planlist li a").click(function(){
        var target = $($(this).attr("href")).offset().top;
        $("html, body").animate({scrollTop: target - 100}, 500);
    });

    //CONTACT
    $(".alert").hide();
    $(".Form-Btn").click(function(){
        var sendFlag = true;

        if(!$("#nameText").val()){
            $("#nameSection .alert").show();
            sendFlag = false;
        } else {
            $("#nameSection .alert").hide();
        }

        if(!$("#kanaText").val()){
            $("#kanaSection .alert").show();
            sendFlag = false;
        } else {
            $("#kanaSection .alert").hide();
        }

        if(!$("#email").val()){
            $("#emailSection .alert").show();
        } else {
            $("#emailSection .alert").hide();
        }

        if(!$("#tel").val()){
            $("#telSection .alert").show();
        } else {
            $("#telSection .alert").hide();
        }

        if(!$("#msg").val()){
            $("#msgSection .alert").show();
        } else {
            $("#msgSection .alert").hide();
        }

        var checkBox = $('input[name="check"]:checked').length;

        if (checkBox == 0) {
            $("#checkSection .alert").show();
            sendFlag = false;
        } else {
            $("#checkSection .alert").hide();
        }

        if(sendFlag == false){
        return false;
        }
    });

    // マウスストーカー
    $(window).mousemove(function (e) {
        $('.cursor span').css({
          left: e.pageX,
          top: e.pageY
        })
    })
    $('a').on('mouseenter', function () {
        $('.cursor span').addClass('active');
    })
    $('a').on('mouseleave', function () {
        $('.cursor span').removeClass('active');
    })
    

    // 左から右に流れるテキストアニメーション
    function slideAnime(){
          $('.leftAnime').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
              $(this).addClass("slideAnimeLeftRight");
              $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
            }else{
              $(this).removeClass("slideAnimeLeftRight");
              $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
            }
          });
        }
        
    $(window).scroll(function (){
        slideAnime();
    });
    
    $(window).on('load', function(){
        slideAnime();
    });

    // じわっと出現させるテキストアニメーション
    function BlurTextAnimeControl() {
        $('.blurTrigger').each(function(){
          var elemPos = $(this).offset().top-50;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
          $(this).addClass('blur');
          }else{
          $(this).removeClass('blur');
          }
          });
      }
      
      $(window).scroll(function () {
        BlurTextAnimeControl();
      });
      
      $(window).on('load', function () {
        BlurTextAnimeControl();
      });
});