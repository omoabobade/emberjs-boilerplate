import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{login-form}}`);

  assert.equal(this.$('.login-btn').text(), 'LOGIN');

  // Template block usage:
  this.render(hbs`
    {{#login-form}}
      template block text
    {{/login-form}}
  `);

  assert.equal(this.$('.forgot-password').text(), 'Forgot Password?');
});
