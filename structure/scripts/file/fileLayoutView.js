define(["marionette", "handlebars"],
	function(Mnt, Hbs) {
		var FileLayoutView = Mnt.LayoutView.extend({
			template: Hbs.compile($("#global").html()),
			el: "body",
			regions: {
				header: "#header",
				content: "#content"
			}
		});
		return FileLayoutView;
	}
);


// layout = new FileLayoutView();

// layout.getRegion('content').show(new TreeView({
//     collection: new ItemCollection([{
//         value: "File-"+1
//     }, {
//         value: "File-"+2
//     },{
//         value: "File-"+3
//     },{
//         value: "File-"+4
//     },{
//         value: "File-"+5
//     },{
//         value: "File-"+6
//     },{
//         value: "File-"+7
//     },{
//         value: "File-"+8
//     },{
//         value: "File-"+9
//     },])
// }));