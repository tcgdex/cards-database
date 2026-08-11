import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブースターVMAX",
		'zh-tw': "快龍VSTAR",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'ja-jp': "ダイバクレツ",
				'zh-tw': "終極衝擊",
			},
			damage: "100×",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から5枚トラッシュし、その中にあるエネルギーの枚数×100ダメージ。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571389,
				tcgplayer: 597384,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ブースターV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [136],
};

export default card;
