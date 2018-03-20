import { test } from 'qunit';
import moduleForAcceptance from 'ember-boilerplate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

/* test('visiting /register', function(assert) {
  //visit('/register');
  visit('/');
  click('.register-link');
 andThen(function() {
    assert.equal(currentURL(), '/register');
  });
}); */

test('If a user is not register, they see a register link', function(assert) {
  visit('/');

  andThen(function() {
    const registerFormPresent = find('.register-link').length > 0 ? true : false;
    assert.equal(registerFormPresent, true);
  });
});
