import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["bs-docs-sidebar", "hidden-print", "hidden-xs", "hidden-sm"],
    addScrollSpy: Ember.on('didRender', function () {
        $('body').scrollspy({ target: '#' + this.$().attr('id'), offset: 52});
        this.$().affix({
            offset: {
                top: function () {
                    return $('#docs-header').outerHeight(true);
                },
                bottom: function () {
                    return $('#siteFooter').outerHeight(true);
                }
            }
        });
    })
});
