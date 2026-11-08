import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カエンジシ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "摂氏６０００度の 息を 吐き出し 激しく 相手を 威嚇する。 メスが 群れの 子供を 守る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きんちょうかん" },
			effect: {
				'ja-jp': "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドミネートファング" },
			damage: "80+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場に「フラダリラボ」が出ているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559561,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シシコ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [668],
};

export default card;
