import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バンバドロ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "口から 吐く 泥は 固まると 雨風にも 強いので 昔の 家の 壁には よく塗られている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きょうかスタンプ" },
			damage: "60+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "このポケモンに「ポケモンのどうぐ」がついているなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "10まんばりき" },
			damage: 180,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561560,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドロバンコ",
	},

	retreat: 4,
	rarity: "None",
	dexId: [750],
};

export default card;
