import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Piplup",
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charm",
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Peck",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 281141
	}
}

export default card
