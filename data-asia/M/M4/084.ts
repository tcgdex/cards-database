import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリマロン",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "たたく"}, "cost": ["Grass"], "damage": 10}, {"name": {"ja": "トゲでさす"}, "cost": ["Grass", "Grass"], "damage": 30}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [650],
};

export default card;
