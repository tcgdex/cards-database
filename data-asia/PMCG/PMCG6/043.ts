import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのアブラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [63],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "エネルギーループ",
			},
			effect: {
				ja: "この攻撃を使用するために、サブリナのアブラに取り付けられたサイキックエネルギーカードを手に返してください。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
