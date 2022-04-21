$(function(){
    // オープニングアニメーション
    $(function () {
        var webStorage = function () {
          if (sessionStorage.getItem('access')) {
            /*2回目以降アクセス時の処理*/
            $(".loading").remove();
            setTimeout(motion, 0);
          } else {
            /*初回アクセス時の処理*/
            sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
            setTimeout(function () {
                $('.loading-animation').fadeIn(1000);
                var h2 = $('.loading-animation');
                var txt_array = h2.text().split("");
                $('.loading-animation').html('<img src="assets/images/common/logo.png" alt="Field Tower Kawasaki">');
            
                $.each(txt_array, function(index, element) {
                    var new_element = $("<span/>").text(element).css({ opacity: 0 });
                    h2.append(new_element);
                    new_element.delay(index * 50);
                    new_element.animate({opacity: 1}, 1000);
                });
                $(this).addClass("fire");
            }, 300); //0.3秒後にロゴと文字をフェードイン
        
            setTimeout(function () {
                $('.loading-animation').fadeOut(1000);
            }, 2500); //2.2秒後にロゴと文字をフェードアウト
        
            setTimeout(function () {
                $('.loading').fadeOut(1000);
            }, 3300); //2.5秒後に白背景をフェードアウト

            setTimeout(motion, 3300);
          }
        }
        webStorage();
      });

    //scroll
    $(".follow").hide();
    $(".totop").hide();
    $(window).scroll(function(){
        //sideBtn follow
        if ($(window).scrollTop() >= $("#firstContents").offset().top){
            $(".follow").fadeIn(500);
        } else {
            $(".follow").fadeOut(500);
        }
        //sideBtn totop
        if ($(window).scrollTop() >= $("#firstContents").offset().top){
            $(".totop").fadeIn();
        } else {
            $(".totop").fadeOut();
        }

        return false
    });

    //text animation
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $("#firstContents h2").not(".fire").each(function(){
            var top = $(this).offset().top;
            var height = $(window).height();
            if (scrollTop > top - height){
                var h2 = $("#firstContents h2");
                var txt_array = h2.text().split("");
                $("#firstContents h2").html("");
                $.each(txt_array, function(index, element) {
                    var new_element = $("<span/>").text(element).css({ opacity: 0 });
                    h2.append(new_element);
                    new_element.delay(index * 70);
                    new_element.animate({opacity: 1}, 1200);
                });
                $(this).addClass("fire");
            }
        });
    });

    //sideBtn totop
    $(".totop").click(function(){
        $("html,body").stop().animate({scrollTop:0},800);
    });

    //nav hover
    $("nav ul li a").hover(function(){
        var parent = $(this).parent();
        $(this).attr("id", "nav_a");
        $(parent).attr("id", "nav_li");
    }, function(){
        $(this).removeAttr("id", "nav_a");
        $("li").removeAttr("id", "nav_li");
    });
    
    $(".btn-burger").click(function() {
        $("header nav ul").slideToggle();
    });

    //Contents action
    $(window).on("scroll load", function () {
    var scroll =$(window).scrollTop();
    var wHeight = $(window).height();
        $("#secondContents").css({
            opacity: 0,
        });
        $("#secondContents").each(function(){
            var contentsPos = $(this).offset().top;
            if (scroll > contentsPos - wHeight + 200){
                $(this).animate({
                    opacity: 1,
                }, 1000);
            }
        });

        $("#thirdContents").css({
            opacity: 0,
        });
        $("#thirdContents").each(function(){
            var contentsPos = $(this).offset().top;
            if (scroll > contentsPos - wHeight + 100){
                $(this).animate({
                    opacity: 1,
                }, 1000);
            }
        });
    });

    //PC Mobile
    var ww = $("body").width();
    if (ww > 640){
        var motion = function () {
            //main visual PC
            $(".pc_only").removeClass();
            var count = $('#slide ul li').length;
            var current = 1;
            var next = 2;
            var interval = 3000;
            var duration = 2000;
            var timer;
            $('#slide li:not(:first-child)').hide();
            timer = setInterval(slideTimer, interval);
            function slideTimer() {
                $("#slide ul li:nth-child(" + current + ")").fadeOut(duration);
                $("#slide ul li:nth-child(" + next + ")").fadeIn(duration);
                current = next;
                next = ++next;
                if (current == 1){
                    $('#main_visual #mainHeading').css("z-index", "30").fadeIn(duration);
                } else {
                    $('#main_visual #mainHeading').fadeOut(duration);
                }
                if (next > count) {
                    next = 1;
                }
            };
        };

        //firstContents
        var fade_bottom = $("#main_visual").height() - $("#main_visual").height()*0.5;
        var fade_move = -2000;
        var fade_time = 2000;
        $("#firstContents").css({
            overflow: "hidden",
        });
        $("#firstContents .contents_img").css({
        opacity: 0,
        transform: "translateX(" + fade_move + "px)",
        transition: fade_time + "ms",
        });
        $("#firstContents .main_contents").css({
            opacity: 0,
            transform: "translateX(" + -fade_move + "px)",
            transition: fade_time + "ms",
        });
        $(window).on("scroll load", function () {
            const scroll_top = $(this).scrollTop();
            var scroll_bottom = scroll_top + $(this).height();
            var fade_position = scroll_bottom - fade_bottom;
            $("#firstContents .contents_img").each(function () {
                if (fade_position > fade_bottom) {
                    $(this).css({
                        opacity: 1,
                        transform: "translateX(0)",
                    });
                }
                $("#firstContents .main_contents").each(function () {
                    if (fade_position > fade_bottom) {
                        $(this).css({
                            opacity: 1,
                            transform: "translateX(0)",
                        });
                    }
                });
            });
        });

        //thirdContents　background action
        $("#thirdContents ul li a").hover(function(){
            var parent = $(this).parent();
            var children = $(parent).children(".item_bg"); 
        
            $(children).stop().animate({width: "250px", height: "130px", top: "120px", left: "70px"}, 500);
        }, function(){
            var parent = $(this).parent();
            var children = $(parent).children(".item_bg"); 
            $(children).stop().animate({width: "390px", height: "360px", top:"0", left:"0"}, 500);
        });
    }
    if (ww <= 640){
        var motion = function () {
            //TOP-mainVisual mobile
            // スライド2枚を抜く
            $(".pc_only").remove();

            var count = $('#slide ul li').length;
            var current = 1;
            var next = 2;
            var interval = 3000;
            var duration = 3000;
            var timer;
            // スライドショー
            $('#slide li:not(:first-child)').hide();
            timer = setInterval(slideTimer, interval);
            function slideTimer() {
                $("#slide li:nth-child(" + current + ")").fadeOut(duration);
                $("#slide li:nth-child(" + next + ")").fadeIn(duration);
                current = next;
                next = ++next;
                if (current == 1){
                    $('#main_visual #mainHeading').css("z-index", "30").fadeIn(duration);
                } else {
                    $('#main_visual #mainHeading').fadeOut(duration);
                }
                if (next > count) {
                    next = 1;
                }
            };
        };
        $(window).on("scroll load", function () {
            //firstContents action
            var scroll =$(window).scrollTop();
            var wHeight = $(window).height();
            $("#firstContents").css({
                opacity: 0,
            });
            $("#firstContents").each(function(){
                var contentsPos = $(this).offset().top;
                if (scroll > contentsPos - wHeight + 50){
                    $(this).animate({
                        opacity: 1,
                    }, 1000);
                }
            });

            //thirdContents background action
            $("#thirdContents ul li").each(function(){
                var itemPos = $(this).offset().top;
                var children = $(this).children(".item_bg"); 
                const textWidth = 180;
                const textHeight = 60;
                const animateYPos = 68;
                const animateXPos = $(".text").offset().left;
                if (scroll > itemPos - wHeight +200){
                    $(children).animate({
                        width: textWidth + "px",
                        height: textHeight + "px",
                        top: animateYPos + "px",
                        left: animateXPos + "px",
                    }, 300)
                }
            });
        });
    }
});
