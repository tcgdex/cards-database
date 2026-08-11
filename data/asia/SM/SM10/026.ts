import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "クラブ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "危険が 迫ると 口から 吐き出す 泡で 全身を 包んで 体を 大きく みせようとする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "はさむ" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557381,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [98],
};

export default card;
