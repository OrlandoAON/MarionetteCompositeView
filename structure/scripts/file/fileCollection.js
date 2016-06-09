define(["backbone", "underscore", "fileModel"],
	function(Backbone, _, FileModel) {
		var fileCollection = Backbone.Collection.extend({
			model: FileModel,
			// url: "http://www.mocky.io/v2/57348812110000d22eba0c18",
			// parse: function(response) {
			// 	return _.isEmpty(response.data) ? {} : response.data;
			// }
			fetch: function(size, autoSort){
			    //This function could be communicating with a service to fetch data, let's use some local data to make things simple
			    this.add([{
                        "id": 1001,
                        "name": "funis",
                        "size": "KB",
                        "children": true
                    }, {
                        "id": 1002,
                        "name": "stipes",
                        "size": "KB"
                    }, {
                        "id": 1003,
                        "name": "foliolum",
                        "size": "KB",
                        "children": true
                    }, {
                        "id": 1004,
                        "name": "caballus",
                        "size": "KB"
                    }], {sort: autoSort});
			  }
		});
		return fileCollection;
	}
);