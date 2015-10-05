import Ember from 'ember';

var Band = Ember.Object.extend({
	name: "",
	
	slug: Ember.computed("name", function(){
		return this.get("name").dasherize();
	})
});

var Song = Ember.Object.extend({
	title: "",
	rating: 0,
	band: ""
});

var blackDog = Song.create({
	title: "Black Dog",
	band: "Led Zepplin",
	rating: 3
});

var yellowLedbetter = Song.create({
	title: "Yellow Ledbetter",
	band: "Pearl Jam",
	rating: 4
});

var daughter = Song.create({
	title: "Daughter",
	band: "Pearl Jam",
	rating: 5
});

var pretender = Song.create({
	title: "The Pretender",
	band: "Foo Fighters",
	rating: 2
})

// var ledZepplin = Band.create({
// 	name: "Led Zepplin"
// });

// var pearlJam = Band.create({
// 	name: "Pearl Jam"
// });

// var fooFighters = Band.create({
// 	name: "Foo Fighters"
// });

var BandsCollection = Ember.Object.extend({
	content: [],
	sortProperties: ["name:desc"],
	sortedContent: Ember.computed.sort("content", "sortProperties")
});

var bands = BandsCollection.create();

var ledZepplin = Band.create({
	name: "Led Zepplin",
	songs: [blackDog]
});

var pearlJam = Band.create({
	name: "Pearl Jam",
	songs: [daughter, yellowLedbetter]
});

var fooFighters = Band.create({
	name: "Foo Fighters",
	songs: [pretender]
});

bands.get("content").pushObjects([ledZepplin, pearlJam, fooFighters]);

// var bands = [ledZepplin, pearlJam, fooFighters];

export default Ember.Route.extend({
	model: function(){
		return bands.get("sortedContent");
	}
});
