import Ember from 'ember';

export default Ember.Component.extend({
    doBookmarkCorrection: Ember.on('didInsertElement', function () {
        Ember.$('body')
            .off('click.cmdpl.nav')
            .on('click.cmdpl.nav', 'a[href^="#"]', function (e) {
                e.preventDefault();
                let bName = $(this).attr('href'),
                    $scrollTarget = $(bName);
                if (bName === '#') {
                    return false;
                }
                //TODO: check that scrollTarget exists
                $('html, body').animate({scrollTop: ($scrollTarget.offset().top - 50)}, 250); // 50 accounts for body padding
                window.location.hash = bName;
                //window.location.assign(window.location.href + bName);
                return false;
            });
    })
});
