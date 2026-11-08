import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌメルゴン",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "大人しいからと からかうと 角で 思い切り 突かれ 太い 尻尾で 薙ぎ払われる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うるおいボディ" },
			effect: {
				'ja-jp': "手札からこのポケモンに[水]エネルギーをつけるたび、このポケモンのHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぬれたつの" },
			damage: "80+",
			cost: ["Water", "Fairy", "Colorless"],
			effect: {
				'ja-jp': "この番、このポケモンのHPを回復していたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559613,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌメイル",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [706],
};

export default card;
