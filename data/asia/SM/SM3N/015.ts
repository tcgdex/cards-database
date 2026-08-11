import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シビシラス",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		'ja-jp': "１匹の 電力は 小さいが たくさんの シビシラスが つながると 雷と 同じ 威力になる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アクアショック" },
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "相手のバトルポケモンに[水]エネルギーがついているなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561015,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [602],
};

export default card;
