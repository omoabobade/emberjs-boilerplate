  import Ember from 'ember';
  import Response from 'ember-cli-mirage/response';
  
  export default function() {
  
    // These comments are here to help you get started. Feel free to delete them.
  
    /*
      Config (with defaults).
  
      Note: these only affect routes defined *after* them!
    */
  
    this.urlPrefix = 'http://localhost';    // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  
    /*
      Shorthand cheatsheet:
  
      this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
  
      http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */

    this.post('/token', (db, request) =>  {
      //debugger;
      const req = JSON.parse(request.requestBody);
      const pw = Ember.get(req, 'password');
      const us = Ember.get(req, 'username');
    
      if(us === 'tester@test.com' && pw) {
        return new Response(201, {}, {"access_token":"qf734tmjDVKUHpM"});
      } else {
        return new Response(404, {}, {});
      }
    });
  
}
