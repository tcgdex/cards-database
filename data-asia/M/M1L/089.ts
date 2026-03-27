import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガアブソルex",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Terminal Period"}, "cost": ["Darkness", "Colorless"], "effect": {"ja": "If your opponent's Active Pokémon has exactly 6 damage counters on it, it is now Knocked Out."}}, {"name": {"ja": "Claw of Darkness"}, "damage": 200, "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "Look at your opponent's hand and discard 1 card you find there."}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [359],
	suffix: "EX",
};

export default card;
