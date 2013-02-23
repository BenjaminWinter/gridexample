Ext.define('App.model.Customers', {
    extend: 'Ext.data.Model',               
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
});