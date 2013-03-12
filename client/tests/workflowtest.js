StartTest(function(t) {
   
    var CustomerStore = Ext.create('App.store.Customers');
   
    var form = Ext.create('App.view.Viewport', {
                height : 200,
                width : 300
            })
    var grid = form.down("grid[id='maingrid']");
     
     
    t.chain(
        { waitFor : 'rowsVisible', args : grid }, 
         
        { action : 'moveCursorTo', target : 'grid => .x-grid-cell' },
         
        { waitFor : 1000 },
 
        { action : 'doubleClick', target : 'grid => .x-grid-cell' },
         
        function(next, cell) {
            var prevValue       = grid.store.first().get('customerName');
            next()  // continue the chain
        },
 
        { waitFor : 'selectorAtCursor', args : 'input' }, 
         
        function(next, foundEl) { 
            foundEl.value = '';

            t.type(foundEl, 'foo[ENTER]', next);
        },
         
        function async(next) {
            t.is(grid.store.first().get('customerName'), 'foo', 'Name was updated correctly');
            next();
        },
         
        { action : 'doubleClick', target : ' maingrid  => .x-grid-cell:nth-child(4)' },
             
        { waitFor : 'selectorAtCursor', args : 'input' },
 
        function(next, foundEl) {
            foundEl.value = '';
            next();
        },
 
        { action : 'type', text : '1234[ENTER]' }, 
         
        function() {
            t.isDateEqual(grid.store.first().get('salesRepEmployeeNumber'), 1234, 'repnumber was updated correctly');
        }
    );
});  
