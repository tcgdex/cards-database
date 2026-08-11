import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フローゼル",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "水中の 獲物を 追いかける うちに 浮き袋が 発達した。 ゴムボートのように 人を 乗せる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 30,
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "アクアブラスト" },
			damage: 80,
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[水]エネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559821,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ブイゼル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [419],
};

export default card;
