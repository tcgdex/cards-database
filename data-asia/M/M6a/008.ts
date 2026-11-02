import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "炎で 世界を 燃やしつくせる 伝説の ポケモン。真実の 世界を 築く 人を 助ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "レーザーフレイム" },
			damage: "80+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに[L]エネルギーがついているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908186,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [643],
};

export default card;
