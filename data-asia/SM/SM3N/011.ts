import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤッキー",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "尻尾から 高圧の 水を 発射すると コンクリートの 壁も 破壊する 威力。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "アクアリフレクト" },
			damage: 50,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561011,
			},
		},
	],

	evolveFrom: {
		ja: "ヒヤップ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [516],
};

export default card;
