import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "羽と 尻尾を 素早く 動かし 前を 向いたまま 後ろへ 泳ぐこともできる ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559250,
			},
		},
	],

	evolveFrom: {
		ja: "タッツー",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [117],
};

export default card;
