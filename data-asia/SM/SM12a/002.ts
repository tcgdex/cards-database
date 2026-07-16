import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "パラス",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "湿気が 足りないのか 栄養が 足りないのか アローラの パラスの キノコは 育ちが いまいち。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "きりさく" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543376,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [46],
};

export default card;
