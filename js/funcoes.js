$(function() {
    $('.botaoMenu').click(function(event) {
        event.stopPropagation();
        if (!$(this).hasClass('menuAtivo')) {
            $(this).addClass('menuAtivo');
            $('nav ul').animate({
                'left': '0px'
            }, 300);
        } else {
            $(this).removeClass('menuAtivo');
            $('nav ul').animate({
                'left': '-100%'
            }, 300);
        }
    });
    $('body').on('click', function() {
        $('.botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({
            'left': '-100%'
        }, 300);
    });
    $('#slideshow-banner').slide({
        cdTime: 5000,
        controllerLeftButton: "imagens/esquerda.png",
        controllerRightButton: "imagens/direita.png"
    });
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    $('.fancybox').fancybox({
        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });
    $('.fancyboxFormulario').fancybox({
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
    document.getElementById("carregando").style.display = "none";
    document.getElementById("corpo").style.display = "block";
    $(document).scroll(function() {
        if ($(this).scrollTop() > 500) {
            document.getElementById("voltarTopo").style.display = "block";
        } else {
            document.getElementById("voltarTopo").style.display = "none";
        }
    });
});