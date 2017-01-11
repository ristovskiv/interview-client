import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('product', params.product_id, {include: 'events'});
  },

  setupController(controller, model){
    this._super(controller, model);
    let newEvent = this.get('store').createRecord('event', {product: model});
    controller.set('newEvent', newEvent);
  },

  actions: {
    willTransition(){
      this.controller.get('model').rollbackAttributes();
      this.controller.get('model').get('events').forEach(function(event){
        event.rollbackAttributes();
      });
      this.controller.get('newEvent').rollbackAttributes();
    }
  }
});
