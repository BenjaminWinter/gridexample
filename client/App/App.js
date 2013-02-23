Ext.application({
    name: 'App',
    appFolder: 'App',
    autoCreateViewport: true,
    paths: {
        'App': 'App',
        'Ext': 'Ext/src'
    },
    requires: [
    ],
    controllers: [
        'Customers'
    ],
    launch: function() {
    }
});
