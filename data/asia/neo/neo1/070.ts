import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "クレファ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [173],
	hp: 30,
	types: ["Colorless"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "eeeeeeek",
			},
			effect: {
				ja: "手をデッキにシャッフルしてから、7枚のカードを描きます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
