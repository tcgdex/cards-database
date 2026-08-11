import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グレンアルマ",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "エスパーと 炎の エネルギーで 強化された 鎧を まとう。 灼熱の 火の玉を 放つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フレイムレギオン" },
			damage: "40+",
			cost: ["Fire"],
			effect: {
				'ja-jp': "[R]エネルギーがついている自分のベンチポケモンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888248,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カルボウ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [936],
};

export default card;
