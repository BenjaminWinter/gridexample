var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Awesome Test Suite',

   preload     : [
        'Ext/resources/css/ext-all.css',
        'Ext/ext-all-debug.js',
        'siesta/siesta-all.js',
        'App/app.js'
    ] 
});

Harness.start(
    'tests/sanitytest.js',
    'tests/gridtest.js',
    'tests/workflowtest.js'
);