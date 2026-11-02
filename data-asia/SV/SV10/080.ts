import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ガルーラ",
		'zh-tw': "袋獸",
		'zh-cn': "袋獸",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "子どもの いない ガルーラが 遭難した 人間の 子を 育てていたという 記録がある。",
		'zh-tw': "紀錄中記載著， 曾經有沒孩子的袋獸 養育了遇難的人類孩子。",
		'zh-cn': "紀錄中記載著， 曾經有沒孩子的袋獸 養育了遇難的人類孩子。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
				'zh-cn': "重摑",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ピヨピヨパンチ",
				'zh-tw': "迷昏拳",
				'zh-cn': "迷昏拳",
			},
			damage: "90×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×90ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。",
				'zh-cn': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821912,
				tcgplayer: 628721,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [115],
};

export default card;
