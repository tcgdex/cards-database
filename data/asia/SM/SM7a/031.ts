import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マッギョ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "海辺の 泥に 埋まって 獲物を 待ち構える。 獲物が 触ったとき 電気を 出して しびれさせるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じたばた" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数x10ダメージ。",
			},
		},
		{
			name: { ja: "サンダーブラスト" },
			damage: 50,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このポケモンについている[雷]エネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558919,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [618],
};

export default card;
