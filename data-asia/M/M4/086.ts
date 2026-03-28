import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "もってくる"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を1枚引く。"}}, {"name": {"ja": "みずでっぽう"}, "cost": ["Water"], "damage": 10}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [656],
};

export default card;
