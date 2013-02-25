Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.store.Customers',
        'Ext.grid.Panel',
        'Ext.layout.container.Border',
	'Ext.grid.plugin.CellEditing',
	'Ext.form.field.Text'
    ],
    title: 'List of Customers',
    layout: 'border',
    items: [{
        xtype: 'grid',
        store: 'Customers',
        region: 'center',
        id:'maingrid',
		columns:[{
            id: 'id',
            header:'ID',
            sortable:true,
            dataIndex:'id',
            flex: 1
        },{
            id:'customerName',
            header:'Customer Name',
            sortable:true,
            dataIndex:'customerName',
            flex: 1,
             editor: {
                allowBlank: false
            }
        },{
            id:'country',
            header:'Country',
            sortable:true,
            dataIndex:'country',
            flex: 1,
             editor: {
                allowBlank: false
            }
        },{
            id:'salesRepEmployeeNumber',
            header:'Sales Reputation Employee Number',
            sortable:true,
            dataIndex:'salesRepEmployeeNumber',
            flex: 1,
             editor: {
                allowBlank: false
            }
        }],
        selModel:{
	    selType: 'cellmodel'
	},
        flex: 2,
        plugins: [{
            ptype: 'cellediting',
            clicksToEdit: 1
            }]
    }, {
	id:'mainPanel',
        frame: true,
        title: 'Customer List',
        region: 'south',
        flex: 1,
        layout: 'fit',
        items: [{
	    id: 'infoPanel',
	    region: 'center',
	    bodyPadding: 7,
	    html: 'Please select a customer to see additional details.'
        }]
    }]
});