import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Surfing Pikachu",
		'fr-fr': "Pikachu Surfeur",
		'es-es': "Pikachu Surf",
		'it-it': "Pikachu Surf",
		'pt-br': "Pikachu Surfista",
		'de-de': "Surfendes Pikachu"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfe",
				'de-de': "Surfer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "One summer, a group of Pikachu was found riding the waves at the local beach.",
	},

	thirdParty: {
		cardmarket: 293473,
		tcgplayer: 124124
	}
}

export default card
