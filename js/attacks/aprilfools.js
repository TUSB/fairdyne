var af_ag1 = {
	type: "arrow",
	id: "af_ag1",
	next_time: 4.8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0.0, speed: 40 },
		{ direction: "$3", turntype: 0, target_time: 1.6, speed: 40 },
		{ direction: "$3", turntype: 0, target_time: 3.2, speed: 40 },

		{ direction: "N1", turntype: 2, target_time: 0.3, speed: 500 },
		{ direction: "N1", turntype: 3, target_time: 0.6, speed: 500 },
		{ direction: "N1", turntype: 2, target_time: 0.9, speed: 500 },
		{ direction: "N1", turntype: 3, target_time: 1.2, speed: 500 },
		{ direction: "N1", turntype: 2, target_time: 1.4, speed: 500 },

		{ direction: "N1", turntype: 3, target_time: 1.9, speed: 500 },
		{ direction: "N1", turntype: 2, target_time: 2.2, speed: 500 },
		{ direction: "N1", turntype: 3, target_time: 2.5, speed: 500 },
		{ direction: "N1", turntype: 2, target_time: 2.8, speed: 500 },
		{ direction: "N1", turntype: 3, target_time: 3.0, speed: 500 },

		{ direction: "N1", turntype: 2, target_time: 3.5, speed: 500 },
		{ direction: "N1", turntype: 3, target_time: 3.8, speed: 500 },
		{ direction: "N1", turntype: 2, target_time: 4.1, speed: 500 },
		{ direction: "N1", turntype: 3, target_time: 4.4, speed: 500 },
		{ direction: "N1", turntype: 2, target_time: 4.6, speed: 500 },
	],
	next_sets: ["af_sp1"],
};

var af_sp1 = {
	type: "spear",
	next_time: 1.6,
	buffer_time: 0.3,
	spear_interval: 300,
	next_sets: ["af_pk1"],
};

var af_pk1 = {
    type: "pike",
    next_time: 6.4,
    buffer_time: 0.8,
    pike_interval: 400,
    down: true,
    next_sets: ["af_sp1"],
};

var af_ag2 = {
	type: "arrow",
	id: "af_ag2",
	next_time: 4.8,
	arrows: [
		{ direction: "R", turntype: 0, target_time: 0.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.6, speed: 400 },
		{ direction: "+0", turntype: 0, target_time: 0.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.2, speed: 400 },
		{ direction: "+0", turntype: 2, target_time: 1.4, speed: 400 },
		{ direction: "+0", turntype: 1, target_time: 1.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.2, speed: 400 },
		{ direction: "+0", turntype: 0, target_time: 2.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.8, speed: 400 },
		{ direction: "-0", turntype: 3, target_time: 3.0, speed: 400 },
		{ direction: "-0", turntype: 4, target_time: 3.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.8, speed: 400 },
		{ direction: "+0", turntype: 0, target_time: 4.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.4, speed: 400 },
		{ direction: "-2", turntype: 2, target_time: 4.6, speed: 400 },
	],
	next_sets: ["af_sp2"],
};


var af_sp2 = {
	type: "spear",
	next_time: 1.6,
	buffer_time: 0.3,
	spear_interval: 300,
	next_sets: ["af_ag3"],
};


var af_ag3 = {
	type: "arrow",
	id: "af_ag3",
	next_time: 6.4,
	arrows: [
		{ direction: "R", turntype: 0, target_time: 0.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.4, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.7, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.8, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 0.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.4, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.7, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.8, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 1.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.4, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.7, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.8, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 2.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.4, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.7, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.8, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 3.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.4, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.7, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.8, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 4.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.3, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.4, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.5, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.6, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.7, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.8, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 5.9, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 6.0, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 6.1, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 6.2, speed: 400 },
		{ direction: "R", turntype: 0, target_time: 6.3, speed: 400 },
	],
	next_sets: ["af_ag4"],
};


var af_ag4 = {
	type: "arrow",
	id: "af_ag4",
	next_time: 6.4,
	arrows: [
		{ direction: "R", turntype: 2, target_time: 0.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 0.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 0.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 0.3, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 0.4, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 0.5, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 0.6, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 0.7, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 0.8, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 0.9, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 1.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 1.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 1.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 1.3, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 1.4, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 1.5, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 1.6, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 1.7, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 1.8, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 1.9, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 2.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 2.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 2.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 2.3, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 2.4, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 2.5, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 2.6, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 2.7, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 2.8, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 2.9, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 3.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 3.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 3.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 3.3, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 3.4, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 3.5, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 3.6, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 3.7, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 3.8, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 3.9, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 4.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 4.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 4.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 4.3, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 4.4, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 4.5, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 4.6, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 4.7, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 4.8, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 4.9, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 5.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 5.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 5.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 5.3, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 5.4, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 5.5, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 5.6, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 5.7, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 5.8, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 5.9, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 6.0, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 6.1, speed: 400 },
		{ direction: "R", turntype: 2, target_time: 6.2, speed: 400 },
		{ direction: "R", turntype: 3, target_time: 6.3, speed: 400 },
	],
	next_sets: ["af_ag5"],
};


var af_ag5 = {
	type: "arrow",
	id: "af_ag5",
	next_time: 6.4,
	arrows: [
		{ direction: "R", turntype: 1, target_time: 0.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 0.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 0.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 0.3, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 0.4, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 0.5, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 0.6, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 0.7, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 0.8, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 0.9, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 1.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 1.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 1.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 1.3, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 1.4, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 1.5, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 1.6, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 1.7, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 1.8, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 1.9, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 2.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 2.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 2.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 2.3, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 2.4, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 2.5, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 2.6, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 2.7, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 2.8, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 2.9, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 3.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 3.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 3.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 3.3, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 3.4, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 3.5, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 3.6, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 3.7, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 3.8, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 3.9, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 4.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 4.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 4.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 4.3, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 4.4, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 4.5, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 4.6, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 4.7, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 4.8, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 4.9, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 5.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 5.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 5.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 5.3, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 5.4, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 5.5, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 5.6, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 5.7, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 5.8, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 5.9, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 6.0, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 6.1, speed: 400 },
		{ direction: "R", turntype: 1, target_time: 6.2, speed: 400 },
		{ direction: "R", turntype: 4, target_time: 6.3, speed: 400 },
	],
	next_sets: ["af_ag4"],
};
