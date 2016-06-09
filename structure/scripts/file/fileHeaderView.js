define(["marionette", "handlebars"],
	function(Mnt, hbs) {
		var FileHeaderView = Mnt.ItemView.extend({
			template: hbs.compile($("#title").html()),
			//onRender: function() {
				//this.$el.append("File Course Test");
			//}
		});
		return FileHeaderView;
	}
);