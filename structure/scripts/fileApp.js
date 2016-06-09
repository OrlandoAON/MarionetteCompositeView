define(["marionette", "fileMainView"],
	function (Mnt, FileMainView) {
		var app = new Mnt.Application();
		app.addRegions({
			body: "body"
		});
		app.on("start", function() {
			var mainView = new FileMainView();
			this.body.show(mainView);
		});
		return app;
	}
);
