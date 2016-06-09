define(["marionette", "handlebars", "underscore", "fileCollection"],
	function(Mnt, Hbs, _, FileCollection) {
		var FileTreeView = Mnt.CompositeView.extend({
			template: Hbs.compile($("#item").html()),
			tagName: "li",
			events: {
    			'click .folder-icon': 'getData'
    		},
			childViewContainer: ".subcategories",
			initialize: function(options) {
				_.extend(this, options);
				// if (_.isEmpty(this.collection)) {
				// 	var children = this.model.get("children");
				// 	this.collection = _.isEmpty(children) ? null : new FileCollection(children);
				// }
			},
			onRender: function() {
				this.$(".subcategories:first").sortable({
					axis: "y"
				});
			},
			getData: function(e){
			    e.preventDefault();
			    e.stopPropagation();
			    if(this.collection) {
			    	this.collapse();
			    } else {
				    var file = new FileCollection();
				    file.fetch();
				    this.collection = file;
				    // this.render();
				}
				this.render();
			  },
			 collapse: function(e) {
			 	this.collection = null;
			 }
		});
		return FileTreeView;
	}
);