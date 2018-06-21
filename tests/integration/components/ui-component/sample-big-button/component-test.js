import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-component/sample-big-button', 'Integration | Component | ui component/sample big button', {
    integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(hbs`{{ui-component/sample-big-button}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
    this.render(hbs`
    {{#ui-component/sample-big-button}}
      template block text
    {{/ui-component/sample-big-button}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
