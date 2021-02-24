import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Jirachi",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "The Third Eye",
			},
			effect: {
				en: "Discard an Energy card attached to Jirachi and draw 3 cards.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psywave",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
