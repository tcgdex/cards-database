import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Jirachi",
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
				'en-us': "The Third Eye",
			},
			effect: {
				'en-us': "Discard an Energy card attached to Jirachi and draw 3 cards.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psywave",
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
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

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86326
			}
		}
	]

}

export default card
