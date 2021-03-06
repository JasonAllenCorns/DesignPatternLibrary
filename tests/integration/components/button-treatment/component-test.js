import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('button-treatment', 'Integration | Component | button treatment', {
    integration: true
});

test('it renders', function(assert) {
    assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{button-treatment}}`);

    assert.equal(this.$().text().trim(), '');

  // Template block usage:
    this.render(hbs`
    {{#button-treatment}}
      template block text
    {{/button-treatment}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
