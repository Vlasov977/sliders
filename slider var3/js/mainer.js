particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 45,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6e0000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#fff",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);


$(document).ready(function() {
    $(".mobile-btn").click(function () {
        $(".menu-list").slideToggle();
        $(".menu-list").removeClass('hider');
    });

    $(".menu-list").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //alert(id);

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(".language-list").animate({width: 'toggle'});
    $(".arrow-lang").click(function () {
        $(".language-list").css({width: 'auto'});
        $(".language-list").animate({width: 'toggle'});

        $(".arrow").toggleClass("hider");
        $(".cross").toggleClass("hider");
    });




    $('.overdrafts_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        initialSlide: 12,
        dots: true,
        focusOnSelect: true,
        slidesToShow: 9,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.wrapper-team-slider').slick({
        centerMode: false,
        centerPadding: '0px',
        dots: true,
        focusOnSelect: false,
        prevArrow: "<img class='slick-prev' src='../../../../assets/front/images/team-left.png'>",
        nextArrow: "<img class='slick-next' src='../../../../assets/front/images/team-right.png'>",
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },

            {
                breakpoint: 567,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.our_vision_slider_panel').slick({
        centerMode: true,
        centerPadding: '310px',
        initialSlide: 1,
        // infinite: true,
        dots: true,
        arrows: true,
        prevArrow: "<img class='slick-prev' src='../../../../assets/front/images/arrow_left.png'>",
        nextArrow: "<img class='slick-next' src='../../../../assets/front/images/arrow_right.png'>",
        focusOnSelect: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.roadmap_slider').slick({
        centerMode: true,
        centerPadding: '368px',
        dots: true,
        focusOnSelect: true,
        infinite: true,
        rows: 1,
        slidesToShow: 3,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    centerPadding: '45px'
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '375px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '85px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $.fn.rotateImg = function (options) {
        var defaults = {deg: 0};
        var settings = $.extend({}, defaults, options);
        return this.each(function () {
            var img = $(this);
            var imgpos = img.position();
            var x0, y0;
            $(window).load(function () {
                x0 = imgpos.left + img.width() / 2;
                y0 = imgpos.top + img.height() / 2;
            });
            var x, y, x1, y1, r;
            $("html").mousemove(function (e) {
                x1 = e.pageX;
                y1 = e.pageY;
                x = x1 - x0;
                y = y1 - y0;
                r = 175 + settings.deg - 175 / Math.PI * Math.atan2(y, x);
                img.css("transform", "rotate(-" + r + "deg)");
                img.css("-moz-transform", "rotate(-" + r + "deg)");
                img.css("-webkit-transform", "rotate(-" + r + "deg)");
                img.css("-o-transform", "rotate(-" + r + "deg)")
            })
        })
    };

    function rand(a) {
        return 50 + Math.floor(Math.random() * (a - 200))
    }

    var w = $(window).width(), h = $(window).height();
    $.each(Array(1), function (indx, element) {
        $('.arrow_c').appendTo('#compas')
    });
    $('.arrow_c').rotateImg({deg: 0});
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

var element = Number("0");
$('.roadmap_slider_item').each(function () {
    element = Number(element) + Number("1");
    $(this).find('.roadmap_number').text(element);
});

$('.modal_2').on('shown.bs.modal', function (e) {
    $('.overdrafts_slider').resize();
});




