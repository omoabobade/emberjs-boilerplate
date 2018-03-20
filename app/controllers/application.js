import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions:{
        toggleLoginForm(){
            this.toggleProperty('showLogin');
        },
        signout(){
            this.get('session').invalidate();
        }
    }
});
