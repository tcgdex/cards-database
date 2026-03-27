import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルロック",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Cosmo Beam"}, "damage": 70, "cost": ["Fighting"], "effect": {"ja": "If you don't have Lunatone on your Bench, this attack does nothing. Don't apply Weakness and Resistance for this attack's damage."}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [338],
};

export default card;
