import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['card-deck'],
    attributeBindings: ['style'],
    style: 'min-height: 320px;',
    cardButtons: Ember.computed(function () {
        return [
            {
                text: '<em class="glyphicon glyphicon-check-thin"></em> Affirmative Click',
                value: true,
                buttonClass: 'btn-confirm',
                actionResponse: 'successClick'
            }
        ];
    }),
    actions: {
        successClick() {
            console.info('hey you made it!');
        },
        cancelClick() {
            console.info('cancel action called');
        },
        containerClickResponse() {
            console.log('containerClickResponse');
        },
        clickResponse(clickTarget) {
            let button = clickTarget.get('button');
            this.send(button.actionResponse);
        }
    }
});
