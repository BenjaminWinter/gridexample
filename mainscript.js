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
				root:'cds',
				totalProperty:'total'
					}
				}				
			})
	var grid = Ext.create('Ext.grid.Panel', {
        store: store,
		//border:0,
		//layout:'fit',
		columns:[{
            text:'Customer Number',
            flex:1,
            sortable:true,
            dataIndex:'customerNumber'
        },{
            text:'Customer Name',
            flex:1,
            sortable:true,
            dataIndex:'customerName'
        },{
            text:'Country',
            flex:1,
            sortable:true,
            dataIndex:'country'
        },{
            text:'Sales Employee Number',
            flex:1,
            sortable:true,
            dataIndex:'salesRepEmployeeNumber'
        }],
        forceFit:true,
        height:250,
        split:true,
        region: 'north'
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
    grid.getSelectionModel().on('selectionchange', function(sm, selectedRecord) {
        if (selectedRecord.length) {
            var detailPanel = Ext.getCmp('detailPanel');
            customerTpl.overwrite(detailPanel.body, selectedRecord[0].data);
        }
    });
    store.load();
})
