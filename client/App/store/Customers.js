Ext.define('App.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'App.model.Customers',
    autoLoad: true,
    autoSync: true,
    proxy:{
        type:'ajax',
        api: {
            create  : '../server/app/create.php',
            read    : '../server/app/readJSON.php',
            update  : '../server/app/updateJSON.php',
            destroy : '../server/app/destroy.php'
        }, 
        reader: {
            type:'json',
            root:'customers',
            totalProperty:'total'
            },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: true,
            encode: true,
            root: 'customers'
            }
        }
});