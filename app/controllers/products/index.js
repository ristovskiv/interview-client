import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionState(product, stateEvent){
      product.transitionState({action: stateEvent}).then(
        (response)=>{
          let product_attrs = response.data.attributes;
          product.setProperties({
            state: product_attrs.state,
            stateEvents: product_attrs.state_events
          });
        }
      );
    }
  }
});
