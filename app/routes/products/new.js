import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').createRecord('product', {});
  },

  actions: {
    willTransition(){
      this.controller.get('model').rollbackAttributes();
    }
  }
});
