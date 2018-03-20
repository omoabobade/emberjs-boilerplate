import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  session: Ember.inject.service(),
  authorize(data, block) {
    const { access_token } = data;
    if (this.get('session.isAuthenticated') && access_token) {
      block('Authorization', `Bearer ${access_token}`);
    }
  }
});
