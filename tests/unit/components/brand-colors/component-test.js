import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('brand-colors', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
    assert.expect(2);

  // Creates the component instance
    let component = this.subject();
    assert.equal(component._state, 'preRender');

  // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
});
