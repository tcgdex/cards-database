import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャスミンのライチュ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [26],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "テールスラップ",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "落雷",
			},
			effect: {
				ja: "この攻撃を使用するために、ジャスミンのライチュに取り付けられたすべてのエネルギーカードを捨ててください。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
