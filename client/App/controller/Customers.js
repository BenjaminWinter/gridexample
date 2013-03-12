Ext.define('App.controller.Customers', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: [
        'Customers'
    ],
    refs: [{
        ref: 'maingrid',
        selector: 'grid[name = maingrid]' 
    },{
        ref: 'customerlist',
        selector: 'component[name = customerlist]'
    }],
    init: function() {},
    onLaunch: function() {
		this.updatepanel();
        this.getMaingrid().getSelectionModel().on({
			selectionchange: this.updatepanel,
			scope: this
        });   
    },
	updatepanel: function() { 
		var customer = this.getMaingrid().getSelectionModel().selected.first();
		if (customer) { 
			this.getCustomerlist().update(customer.getData());
		} else {
			this.getCustomerlist().update({});
		}
	}
});
