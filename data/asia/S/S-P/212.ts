import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジジーロン",
		'zh-tw': "路卡利歐V",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'ja-jp': "人懐っこく 心優しいが ひとたび 怒ると 強風を 巻き起こし すべてを なぎ倒す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "どつく",
				'zh-tw': "粉碎拳",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ぎゃくじょう",
				'zh-tw': "旋風踢",
			},
			damage: "70+",
			cost: ["Water", "Fighting"],
			effect: {
				'ja-jp': "自分のベンチポケモンにダメカンがのっているなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 568806,
				tcgplayer: 597396,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [780],
};

export default card;
