import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-component/sample-button-card', 'Integration | Component | ui component/sample button card', {
    integration: true
});

test('it renders', function(assert) {
    assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{ui-component/sample-button-card}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:
    this.render(hbs`
    {{#ui-component/sample-button-card}}
      template block text
    {{/ui-component/sample-button-card}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
