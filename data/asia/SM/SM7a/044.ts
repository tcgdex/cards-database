import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カクレオン",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "体の 色を 変えて 景色に 溶けこみ 獲物に 忍び寄る。 お腹の 模様は 消せないのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ユニットカラー1" },
			effect: {
				'ja-jp': "このポケモンに「ユニットエネルギー草炎水」がついているかぎり、このポケモンは[草][炎][水]の3つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベロビンタ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558932,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [352],
};

export default card;
