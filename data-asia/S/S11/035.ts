import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "チョンチー",
		'zh-tw': "燈籠魚",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "ひれが 変化して できた 触手は それぞれが プラスと マイナスの 電気が 流れている。",
		'zh-tw': "從鰭變化而來的觸手之中，分別流通著 正電以及負電。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ピッカリだま",
				'zh-tw': "光彈",
			},
			damage: 10,
			cost: ["Lightning"],
		},
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
			},
			damage: 20,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667910,
				tcgplayer: 569966,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [170],
};

export default card;
