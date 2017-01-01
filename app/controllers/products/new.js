import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createProduct(){
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
  }
});
