import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロップ",
		'zh-tw': "長耳兔",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "まわりの 様子を つねに 気にして 危険が およぶと 破壊力 抜群の キックを おみまいする。",
		'zh-tw': "總是注意著周圍的狀況。危險逼近時，就會給對手 奉上破壞力十足的踢腿。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "けとばす",
				'zh-tw': "踢飛",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "にどげり",
				'zh-tw': "二連踢",
			},
			damage: "100×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×100ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×100點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667963,
				tcgplayer: 570019,
			},
		},
	],

	evolveFrom: {
		ja: "ミミロル",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [428],
};

export default card;
