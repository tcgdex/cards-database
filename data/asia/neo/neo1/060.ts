import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "hoothoot",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [163],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "催眠",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ペック",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
