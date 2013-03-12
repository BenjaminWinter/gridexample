StartTest(function(t) {
    t.diag("Sanity test, loading classes on demand and verifying they were indeed loaded.")
    
    t.ok(Ext, 'ExtJS is here');

    t.ok('client.App.controller.Customers', 'Controller loaded');
    t.ok('client.App.model.Customers', 'Model loaded');
    t.ok('client.App.store.Customers', 'store loaded' );
    t.ok('client.App.view.Viewport', 'Viewport loaded');
});  
