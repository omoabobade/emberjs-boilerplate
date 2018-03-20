import RESTAdapter from 'ember-data/adapters/rest';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default RESTAdapter.extend(DataAdapterMixin, {
    host: "http://localhost/api",
    authorizer: 'authorizer:customauth',
    pathForType: function(type) {
        return type;
    }
});
