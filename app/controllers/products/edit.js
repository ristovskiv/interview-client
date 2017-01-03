import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  actions: {
    updateProduct(){
      let product = this.get('model');
      product.save().then(
        ()=>{
          this.transitionToRoute('products.index');
        },
        ()=>{
          console.log(product.get('errors').toArray());
        }
      );
    },
    deleteEvent(event){
      console.log(event);
    },
    createEvent(){
      this.get('newEvent').save().then(
        ()=>{
          let newEvent = this.get('store').createRecord('event', {product: this.get("model")});
          this.set('newEvent', newEvent);
        }
      );
    }
  }
});
