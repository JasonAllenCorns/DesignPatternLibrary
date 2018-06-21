import BaseSection from 'dpl/components/docs-section-base/component';

export default BaseSection.extend({
    didInsertElement() {
        this._super(...arguments);
        this.$('.bs-docs-popover-dismiss').popover({
            trigger: 'focus'
        });
        this.$('[data-toggle=popover]').popover();
    }
});
