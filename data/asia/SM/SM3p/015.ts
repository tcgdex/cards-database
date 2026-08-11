import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レシラム",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "炎で 世界を 燃やしつくせる 伝説の ポケモン。 真実の 世界を 築く 人を 助ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げきりん" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "しゃくねつのいぶき" },
			damage: 130,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560173,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [643],
};

export default card;
