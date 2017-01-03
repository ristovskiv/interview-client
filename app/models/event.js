import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  product: DS.belongsTo('product')
});
