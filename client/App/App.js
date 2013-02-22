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
			url:'../server/app/data.php', 
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
        region: 'center',
		columns:[{
            id: 'customerNumber',
            header:'Customer Number',
            sortable:true,
            dataIndex:'customerNumber',
            flex: 1,
             editor: {
                allowBlank: false
            }
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
        selModel: {
            selType: 'cellmodel'
        },
        flex: 2,
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

    var infoPanel = Ext.create('Ext.Panel', {
        frame: true,
        title: 'Customer List',
        region: 'south',
        flex: 1,
        layout: 'fit',
        items: [
            grid, {
                id: 'infoPanel',
                region: 'center',
                bodyPadding: 7,
                html: 'Please select a customer to see additional details.'
        }]
    });
    grid.getSelectionModel().on('selectionchange', function(sm, selectedRecord) 
    {
        if (selectedRecord.length) {
            var detailPanel = Ext.getCmp('infoPanel');
            customerTpl.overwrite(detailPanel.body, selectedRecord[0].data);
        }
    });
    store.load();
    var mainPanel = Ext.create('Ext.Panel', {
         title:      "Customers",	
         layout:     'border'
     });
    var mainView = Ext.create('Ext.Viewport',{	
         layout:     'fit',
     });
     mainPanel.add(grid);
     mainPanel.add(infoPanel);	
     mainView.add(mainPanel);
})
