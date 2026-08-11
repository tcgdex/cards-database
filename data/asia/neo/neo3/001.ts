import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Zubat",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "噛む",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "毒スプレー",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
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
