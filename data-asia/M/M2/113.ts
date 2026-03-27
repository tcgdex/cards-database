import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メガサメハダーex",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "よくばりのきば" },
			damage: 70,
			cost: ["Darkness"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ハングリージョーズ" },
			damage: 120,
			cost: ["Darkness", "Darkness"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Mega Hyper Rare",
	dexId: [319],

	suffix: "EX",
};

export default card;
