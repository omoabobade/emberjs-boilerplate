import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Base.extend({

  tokenEndpoint: `${config.host}/token`,
  
    restore(data) {
      return new Promise((resolve, reject) => {
        if (!Ember.isEmpty(data.access_token)) {
          resolve(data);
        } else {
          reject();
        }
      });
    },
  
    authenticate(creds) {
      const { identification, password } = creds;
      const data = JSON.stringify({
          username: identification,
          password: password,
          grant_type: "password"
      });
  
      const requestOptions = {
        url: this.tokenEndpoint,
        type: 'POST',
        data,
        contentType: 'application/x-www-form-urlencoded',
      };
  
      return new Promise((resolve, reject) => {
        ajax(requestOptions).then((response) => {
          run((/*response*/) => {
            resolve(
              response
            );
          });
        }, (error) => {
          run(() => {
            reject(error);
          });
        });
      });
    },
  
    invalidate(data) {
      // debugger;
      return Promise.resolve(data);
    }
});
