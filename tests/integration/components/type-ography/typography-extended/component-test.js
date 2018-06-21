import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('type-ography/typography-extended', 'Integration | Component | type ography/typography extended', {
    integration: true
});

test('it renders', function(assert) {
    assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{type-ography/typography-extended}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:
    this.render(hbs`
    {{#type-ography/typography-extended}}
      template block text
    {{/type-ography/typography-extended}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
