import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('affix-sidebar', 'Integration | Component | affix sidebar', {
    integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(hbs`{{affix-sidebar}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
    this.render(hbs`
    {{#affix-sidebar}}
      template block text
    {{/affix-sidebar}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
