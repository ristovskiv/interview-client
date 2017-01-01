import Ember from 'ember';

export function isState(params) {
  return params[0] === 'state';
}

export default Ember.Helper.helper(isState);
