 StartTest(function(t) {
    
    var CustomerStore = Ext.create('App.store.Customers');
                
    var view = Ext.create('App.view.Viewport', {
        height : 200,
        width : 300,
        stores:[
            'Customerstore'
        ]
    });
	
    var grid = view.down("grid[name = 'maingrid']");
	
    grid.store.load();
    
    t.waitForRowsVisible(grid, function() {
        t.is(grid.store.getCount(), grid.getView().getNodes().length, 'Rendered all data in store ok');
        t.matchGridCellContent(grid, 0, 0, grid.store.first().get(id), 'Found first id in first cell');
    });
})