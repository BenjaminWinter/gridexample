Ext.onReady(function(){		  
	Ext.define('mymodel', 
        {
        extend:'Ext.data.Model',
        fields:
            [
                {name:'customerNumber'},
                {name:'customerName'},
                {name:'country'},
                {name:'salesRepEmployeeNumber'},
                {name:'contactLastName'},
                {name:'contactFirstName'},
                {name:'phone'},
                {name:'addressLine1'},
                {name:'city'},
                {name:'postalCode'}
            ],
        idProperty:'id'
        })			
	var store = Ext.create('Ext.data.JsonStore', {
		autoLoad:true,
		model:'mymodel',
		proxy:{
			type:'ajax',
			url:'json.php', 
			reader: {
				type:'json',
				root:'customers',
				totalProperty:'total'
					}
				}				
			})
            
    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });
    
	var grid = Ext.create('Ext.grid.Panel', {
        store: store,
		columns:[{
            id: 'customerNumber',
            header:'Customer Number',
            text:'Customer Number',
            flex:1,
            sortable:true,
            dataIndex:'customerNumber',
             editor: {
                allowBlank: false
            }
        },{
            id:'customerName',
            header:'Customer Name',
            flex:1,
            sortable:true,
            dataIndex:'customerName',
             editor: {
                allowBlank: false
            }
        },{
            id:'country',
            header:'Country',
            flex:1,
            sortable:true,
            dataIndex:'country',
             editor: {
                allowBlank: false
            }
        },{
            id:'salesRepEmployeeNumber',
            header:'Sales Employee Number',
            flex:1,
            sortable:true,
            dataIndex:'salesRepEmployeeNumber',
             editor: {
                allowBlank: false
            }
        }],
        selModel: {
            selType: 'cellmodel'
        },
        forceFit:true,
        height:250,
        split:true,
        region: 'north',
         plugins: [cellEditing]
        })
    var customerTplMarkup = [
        'Customer Name : {customerName}<br/>',
        'Last Name : {contactLastName}<br/>',
        'First Name: {contactFirstName}<br/>',
        'Phone Number: {phone}<br/>',
        'Address: {addressLine1}<br/>',
        'city: {city}<br>',
        'Postal Code : {postalCode}<br/>'
    ];
    
    var customerTpl = Ext.create('Ext.Template', customerTplMarkup);

    Ext.create('Ext.Panel', {
        renderTo: 'grid-example',
        frame: true,
        title: 'Customer List',
        width: 700,
        height: 400,
        layout: 'border',
        items: [
            grid, {
                id: 'detailPanel',
                region: 'center',
                bodyPadding: 7,
                bodyStyle: "background: #ffffff;",
                html: 'Please select a customer to see additional details.'
        }]
    });
    grid.getSelectionModel().on('selectionchange', function(sm, selectedRecord) 
    {
        if (selectedRecord.length) {
            var detailPanel = Ext.getCmp('detailPanel');
            customerTpl.overwrite(detailPanel.body, selectedRecord[0].data);
        }
    });
    store.load();
})
