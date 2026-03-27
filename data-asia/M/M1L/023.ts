import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "バルキー",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Eager Hits"}, "damage": "10+", "cost": [], "effect": {"ja": "Flip a coin until you get tails. This attack does 30 more damage for each heads."}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [236],
};

export default card;
