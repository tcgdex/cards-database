import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペパーのマフィティフex",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハッスルタックル" },
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンにダメカンがのっていないなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "おやぶんヘッド" },
			damage: 210,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「おやぶんヘッド」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863786,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ペパーのオラチフ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [943],

	suffix: "EX",
};

export default card;
