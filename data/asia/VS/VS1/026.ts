import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モーティのミスレアバス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [200],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "悪夢",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
			damage: 20,
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
