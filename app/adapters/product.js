import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  transitionState(model, params){
    const url = this.buildURL('product', model.get('id')) + "/transition";
    return this.ajax(url, 'PATCH', {data: {data: {type: 'products', id: model.get('id'), attributes: params}}});
  }
});
