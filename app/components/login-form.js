import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    actions: {
        login() {
            this.set('loginError', false);
            this.set('loading', true);
            let { identification, password } = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:customauth', { identification, password }).then(()=>{
                this.set('loading', false);
                //this.get('router').transitionTo('accounts.dashboard');
            }).catch(() => {
                this.set('loading', false);
                this.set('loginError', true);
            });
        }
      }
});
