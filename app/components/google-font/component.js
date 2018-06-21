import Ember from 'ember';

export default Ember.Component.extend({
    installFonts: Ember.on('willRender', function () {
        window.WebFontConfig = {
            google: {families: ['Raleway:300,400,700:latin']}
        };
        let wf = document.createElement('script');
        wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        let s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })
});
