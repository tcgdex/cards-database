import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー",
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "殻の中に 幸せが たくさん つまっているらしく 優しくされると 幸運を 分け与える という。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863593,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [175],
};

export default card;
