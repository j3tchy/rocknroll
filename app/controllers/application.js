import Ember from 'ember';

var blackDog = {
  title: "Black Dog",
  band: "Led Zepplin",
  rating: 3
};

var yellowLedbetter = {
  title: "Yellow Ledbetter",
  band: "Pearl Jam",
  rating: 4
};

var pretender = {
  title: "The Pretender",
  band: "Foo Fighters",
  rating: 2
};

var SongCollection = Ember.Object.extend({
	content: [],
	sortProperties: ['rating:desc'],
	sortedContent: Ember.computed.sort("content", "sortProperties"),
});

var songs = SongCollection.create();
songs.get("content").pushObjects([blackDog, yellowLedbetter, pretender]);

// window.songs = songs;

// var alwaysWaiting = Song.create({
// 	title: "Always Waiting",
// 	band: "Kaya Project",
// 	rating: 5
// });

// window.newSong = alwaysWaiting;

export default Ember.Controller.extend({
	songs: songs.get("sortedContent")
});
