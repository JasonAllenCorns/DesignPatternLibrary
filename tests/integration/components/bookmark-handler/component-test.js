import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bookmark-handler', 'Integration | Component | bookmark handler', {
    integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(hbs`{{bookmark-handler}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
    this.render(hbs`
    {{#bookmark-handler}}
      template block text
    {{/bookmark-handler}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
