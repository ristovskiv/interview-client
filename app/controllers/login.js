import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      let credentials = this.getProperties('identification', 'password'), authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).then(
          ()=>{
            this.get('flashMessages').success('You have signed in successfully');
        }).catch(
          ()=> {
            this.get('flashMessages').warning('Email or password are incorrect');
        });
    }
  }
});
