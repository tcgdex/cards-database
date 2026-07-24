import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハイドロターン" },
			damage: "30×",
			cost: ["Water"],
			effect: {
				ja: "このポケモンについている[W]エネルギーの数×30ダメージ。このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "なみのり" },
			damage: 140,
			cost: ["Water", "Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839209,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [131],

	suffix: "EX",
};

export default card;
