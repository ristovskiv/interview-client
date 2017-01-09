import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('string'),
  initialState: DS.attr('string'),
  stateEvents: DS.attr(),
  events: DS.hasMany('event'),

  transitionState(params){
    const adapter = this.store.adapterFor(this.constructor.modelName);
    return adapter.transitionState(this, params);
  }
});
