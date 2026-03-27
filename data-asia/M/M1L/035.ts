import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ジオヅム",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "コジオ",
	},

	attacks: [{"name": {"ja": "Rock Hurl"}, "damage": 50, "cost": ["Fighting", "Colorless"], "effect": {"ja": "This attack's damage isn't affected by Resistance"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [933],
};

export default card;
