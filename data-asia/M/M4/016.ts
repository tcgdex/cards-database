import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "テッポウオ",
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "口から 噴き出す 水流は １００メートル先で 動く 獲物に だって 命中する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "するどいひれ",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [223],

	thirdParty: {
		cardmarket: 876915
	}
};

export default card;
