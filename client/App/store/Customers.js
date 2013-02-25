Ext.define('App.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'App.model.Customers',
    autoLoad: true,
    autoSync: true,
    proxy:{
        type:'ajax',
        api: {
            create  : '../server/app/data.php?action=create',
            read    : '../server/app/data.php?action=read',
            update  : '../server/app/data.php?action=update',
            destroy : '../server/app/data.php?action=destroy'
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
