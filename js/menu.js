
(function(){

        var $body = document.querySelector('body')
        $body.classList.remove('no-js')
        $body.classList.add('js')

        var $btn = document.querySelector('.header__btn-menu')
        $btn.removeAttribute('style')

        var menu = new Menu({
            container: '.header__nav';
            toggleBtn: '.header__btn-menu';
            widthEnabled: 1024;

        })
})()


