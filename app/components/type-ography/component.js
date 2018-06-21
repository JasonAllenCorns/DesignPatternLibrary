import Ember from 'ember';

export default Ember.Component.extend({
    bindColorVariants: Ember.on('didInsertElement', function () {
        let _self = this;
        _self.$().off('click.docs.colorToggle').on('click.docs.colorToggle', '[data-toggle]', function (evt) {
            let t = [],
                txtToggle = $(this).data('textcolor');
            t.push('textColorToggle');
            t.push(txtToggle);
            _self
                .$('.textColorToggle')
                .removeClass()
                .addClass(t.join(' '));
            evt.preventDefault();
        });
    }),
    unbindColorVariants: Ember.on('willDestroyElement', function () {
        this.$().off('click.docs.colorToggle');
    })
});
