(function ($) {
    $(document).ready(function () {
        //fullpage init
        if ($(window).width() > 1199) {
            $('.fullpage').fullpage({
                fitToSection: true,
                verticalCentered: false,
                easingcss3: 'cubic-bezier(.63, 0, .31, .77)',
                navigation: true,
                navigationPosition: 'left',
                navigationTooltips: ['848SOL', 'Opportunities', 'Сareers', 'Clients', 'Solution', 'Services'],
                scrollOverflowReset: true,
                scrollOverflow: true,
                resize: true
            });
        }

        //nice select init
        $('.custom-select').niceSelect();

        //custom upload field
        $(".upload-file-field input[type=file]").change(function () {
            var filename = $(this).val().replace(/.*\\/, "");
            $('.upload-file-field span').text(filename);
        });

        //modal actions
        $('.cv-modal form button').click(function (e) {
            e.preventDefault();
            console.log('123123')
            $(this).parent().parent().parent().find('.main').fadeOut(300);
            $(this).parent().parent().parent().find('.thanks').delay(300).fadeIn(300);
        })
        $('.cv-modal .close').click(function () {
            setTimeout(() => {
                $(this).parent().find('.main').show();
                $(this).parent().find('.thanks').hide();
            }, 300)
        })

        //contact form
        $('.section-five__form--wrapper label').click(function () {
            let checkFlag = $(this).find('input').prop('checked');
            checkFlag ? $(this).addClass('active') : $(this).removeClass('active')
        })

        $('.section-five__form--wrapper button').click(function (e) {
            e.preventDefault();
        })

        //scroll to anchor

        $('.template-btn[data-contact]').click(function (e) {
            e.preventDefault();
            if ($(window).width() < 1199) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 60
                }, 500);
            }
            else {
                $.fn.fullpage.moveTo(5)
            }
        });

        $('.template-btn[data-services]').click(function (e) {
            e.preventDefault();
            if ($(window).width() < 1199) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 60
                }, 500);
            }
            else {
                $.fn.fullpage.moveTo(6)
            }
        });

        $('.section-three__cards__item .full-link').click(function () {
            let currentVal = $(this).data('value');
            $('#position-select').val(currentVal);
            $('.cv-modal .nice-select .current').text(currentVal);
            $('.cv-modal .nice-select .list li').each(function () {
                if (currentVal === $(this).data('value')) {
                    $('.cv-modal .nice-select .list li').removeClass('selected');
                    $(this).addClass('selected');
                }
            })

        })


    });

    $(window).scroll(function () {
    });

    $(window).resize(function () {

    });

    $(window).load(function () {
        $('.preloader').removeClass('loading')

        setTimeout(() => {
            $('.preloader').hide();
        }, 1500);
    });
})(jQuery);