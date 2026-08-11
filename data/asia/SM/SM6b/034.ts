import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドンファン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "キバが 長くて 大きいほど 群れの中での ランクが 高い。 キバが 伸びるには 時間が かかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "じたばた" },
			damage: "10×",
			cost: ["Fighting"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数x10ダメージ。",
			},
		},
		{
			name: { ja: "こうそくスピン" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559184,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴマゾウ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [232],
};

export default card;
