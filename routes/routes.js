
exports.techHandler = function(req, res){
	res.render('page.handlebars', 
	           { tabulardata: [	{name: 'express', url: 'expressjs.com'},
								{name: 'hapi', url: 'hapi.js'},
								{name: 'redux', url: 'redux.com'},
								{name: 'react', url: 'reactjs.com'}	] ,
				title: "My Favourite Technologies"
			   }
			);
}//techHandler

exports.placeHandler = function(req, res){
	res.render('page.handlebars', 
	           { tabulardata: [	{name: 'Delhi', url: 'State.Delhi'},
								{name: 'Pune', url: 'State.Maharashtra'},
								{name: 'Bangalore', url: 'State.Karnataka'}	],
				title: "My Favourite Places",
				layout: 'layout2' 
			   }
			);
}//placeHandler