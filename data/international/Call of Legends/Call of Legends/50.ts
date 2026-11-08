import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [447],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Tumble Over",
				'fr-fr': "Culbuter",
				'de-de': "Umkippen"
			},
			effect: {
				'en-us': "Riolu can't attack during your next turn.",
				'fr-fr': "Riolu ne peut pas attaquer lors de votre prochain tour.",
				'de-de': "Riolu kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		'en-us': "They communicate with one another using their auras. They are able to run all through the night.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88758,
				cardmarket: 279693
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88758,
				cardmarket: 279693
			},
		},
	],

}

export default card
