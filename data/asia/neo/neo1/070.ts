import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クレファ",
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
				'ja-jp': "eeeeeeek",
			},
			effect: {
				'ja-jp': "手をデッキにシャッフルしてから、7枚のカードを描きます。",
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
