import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガメガニウムex",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 360,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ジャイアントブーケ" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[G]エネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864063,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベイリーフ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [154],

	suffix: "EX",
};

export default card;
