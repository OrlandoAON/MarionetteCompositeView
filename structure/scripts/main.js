require.config({
    baseUrl: "scripts",
    paths: { 
        // library
        jquery: "lib/jquery-1.12.0",
    	underscore: "lib/underscore",
        backbone: "lib/backbone",
    	marionette: "lib/backbone.marionette",
        handlebars: "lib/handlebars-v4.0.5",
        jqueryUi: "lib/jquery-ui",
        // add files here
        fileApp: "fileApp",
         // application files
        fileLayoutView: "file/fileLayoutView",
        fileMainView: "file/fileMainView",
        fileHeaderView: "file/fileHeaderView",
        fileRootView: "file/fileRootView",
        fileTreeView: "file/fileTreeView",
        fileCollection: "file/fileCollection",
        fileModel: "file/fileModel"
    
        //myView: ".../myView",
    },
    shim: {
    	backbone: {
    		deps: ["jquery", "underscore", "jqueryUi"],
    		exports: "backbone"
    	}
    }
});
require(["backbone", "marionette", "fileApp"],
    function(Backbone, Mnt, App) {
        App.start();
    }
);