import BaseSection from 'dpl/components/docs-section-base/component';

export default BaseSection.extend({
    didInsertElement() {
        this._super(...arguments);
        this.$('[data-toggle=tooltip]').tooltip();
    }
});
