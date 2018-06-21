import Ember from 'ember';
export default Ember.Component.extend({
    canShowDialog: false,
    //emberModal: Ember.inject.service('ember-modal'),
    modal: null,
    modalButtons: Ember.computed(function () {
        return [
            {
                text: '<em class="glyphicon glyphicon-check-thin"></em> Confirm This Modal',
                value: true,
                buttonClass: 'btn-confirm',
                actionResponse: 'successClick'
            }
        ];
    }),
    actions: {
        toggleModal() {
            this.toggleProperty('canShowDialog');
        },
        successClick(button) {
            console.log('======================================== :: component::successClickHandler');
            console.log("(j.corns) button", button);
            console.log('======================================== :: end component::successClickHandler');

        },
        veilClickHandler() {
            console.log('======================================== :: component::veilClickHandler');
            console.log("(j.corns) arguments", arguments);
            console.log('======================================== :: end component::veilClickHandler');

        },
        closerClickHandler() {
            console.log('======================================== :: component::closerClickHandler');
            console.log("(j.corns) arguments", arguments);
            console.log('======================================== :: end component::closerClickHandler');

        },
        buttonClickHandler(itm, button) {
            console.log('======================================== :: component::buttonClickHandler');
            console.log("(j.corns) arguments", arguments);
            console.log('======================================== :: end component::buttonClickHandler');
            this.send('successClick', button);
        }
    }
});
