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
        name: 'maingrid',
        columns:[{
            header:'ID',
            sortable:true,
            dataIndex:'id',
            flex: 1
        },{
            header:'Customer Name',
            sortable:true,
            dataIndex:'customerName',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },{
            header:'Country',
            sortable:true,
            dataIndex:'country',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },{
            header:'Sales Reputation Employee Number',
            sortable:true,
            dataIndex:'salesRepEmployeeNumber',
            flex: 1,
            editor: {
                allowBlank: true
            }
        }],
        selModel: {
			allowDeselect: true,
			selType: 'rowmodel'
        },
        flex: 2,
        plugins: [{
            ptype: 'cellediting',
            clicksToEdit: 1
        }]
    }, {
        frame: true,
        title: 'Customer List',
        region: 'south',
        flex: 1,
        layout: 'fit',
        items: [{
			xtype: 'component',
            name: 'customerlist',
            region: 'center',
            bodyPadding: 7,
			tpl: [
				'<tpl if="customerName">',
				'	Customer Name : {customerName}<br/>',
				'	Last Name : {contactLastName}<br/>',
				'	First Name: {contactFirstName}<br/>',
				'	Phone Number: {phone}<br/>',
				'	Address: {addressLine1}<br/>',
				'	city: {city}<br>',
				'	Postal Code : {postalCode}<br/>',
				'<tpl else>',
				'	Please select a customer to see additional details.',
				'</tpl>'
			],
			data: {}
        }]
    }]
});
