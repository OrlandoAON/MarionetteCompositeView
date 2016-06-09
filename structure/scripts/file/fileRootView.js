define(["marionette", "handlebars", "fileTreeView"],
	function(Mnt, Hbs, FileTreeView) {
		// Hbs.registerHelper("addFileStyle", function(context, options) {
	 //    	var lastLevelOption = $("#file-level option:last").val(),
	 //    		bufferSpace = 350;
	 //    	if (!isNaN(lastLevelOption)) {
	 //    		bufferSpace = (parseInt(lastLevelOption) * 25) + 25;
	 //    	}
	 //    	var leftPadding = this.level * 25,
	 //    		rightPadding = bufferSpace - leftPadding;
		// 	return "padding: 0 " + rightPadding + "px 0 " + leftPadding + "px";
		// });
		var FileRootView = Mnt.CollectionView.extend({
			childView: FileTreeView,
			tagName: "ul"
		});
		return FileRootView;
	}
);