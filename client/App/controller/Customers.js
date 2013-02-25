Ext.define('App.controller.Customers', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: [
        'Customers'
    ],
    refs: [{
        ref: 'maingrid',
        selector: 'grid[id = maingrid]' 
    },{
        ref:'detailpanel',
        selector: 'panel[id = mainPanel]'
    }],
    init: function() {
       
    },
    onLaunch: function() {
        var self = this;
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
        
        self.getMaingrid().getSelectionModel().on('selectionchange', function(sm, selectedRecord) 
        {
            if (selectedRecord.length) {
                customerTpl.overwrite(self.getDetailpanel().body, selectedRecord[0].data);
            }
        });   
    }
});