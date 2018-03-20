import ApplicationAdapter from './application';
import AjaxMixin from 'mansard/mixins/ajax-calls';

export default ApplicationAdapter.extend(AjaxMixin,{
    signup(model, params){
        const url = this.buildURL('account')+'/register';
        return this.doJsonPost(url,params);
    },
    findRecord(store, type, id) {
        let url = this.buildURL('account')+'/userdetails?id='+id;
        return this.doJsonGet(url);
      }

});
