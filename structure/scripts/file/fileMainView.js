define(["marionette", "underscore", "fileLayoutView", "fileHeaderView", "fileRootView", "fileCollection"],
	function(Mnt, _, FileLayoutView, FileHeaderView, FileRootView, FileCollection) {
		var FileMainView = Mnt.ItemView.extend({
			template: false,
			initialize: function(options) {
				_.extend(this, options);
				this.mainLayout = new FileLayoutView({
					el: this.el
				});
				this.mainLayout.render();
			},
			onRender: function() {
				var _this = this;
				var fileCollection = new FileCollection();
				this.mainLayout.header.show(new FileHeaderView());
				fileCollection.fetch();
				// fileCollection.fetch({
					// dataType: "jsonp",
					// success: function(col, response) {
					// 	var fileRootView = new FileRootView({
					// 		collection: col
					// 	});
					// 	_this.mainLayout.content.show(fileRootView);
					// }
				// });
				var fileRootView = new FileRootView({
					collection: fileCollection
				});
				_this.mainLayout.content.show(fileRootView);
			}
		});
		return FileMainView;
	}
);