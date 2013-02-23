Ext.define('App.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'App.model.Customers',
    autoLoad: true,
    proxy:{
        type:'ajax',
        url:'../server/app/data.php', 
        reader: {
            type:'json',
            root:'customers',
            totalProperty:'total'
            }
        }
});