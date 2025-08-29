import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルーノのヒットモンリー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [106],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "キック",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "速いキック",
			},
			effect: {
				ja: "衰弱や抵抗を適用しないでください。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
