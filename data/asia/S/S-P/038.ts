import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブースター",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "体内に 炎が 溜まると ブースターの 体温も 最高 ９００度 まで 上がっていく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "メラメラ" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。その後、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463104,
				tcgplayer: 597258,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [136],
};

export default card;
