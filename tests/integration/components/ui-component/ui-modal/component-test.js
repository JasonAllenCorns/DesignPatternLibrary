import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-component/ui-modal', 'Integration | Component | ui component/ui modal', {
    integration: true
});

test('it renders', function(assert) {
    assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{ui-component/ui-modal}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:
    this.render(hbs`
    {{#ui-component/ui-modal}}
      template block text
    {{/ui-component/ui-modal}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
