import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [102],

	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'es-es': "Bomba Germen",
				'it-it': "Semebomba",
				'pt-br': "Bomba de Sementes",
				'de-de': "Samenbomben"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Six of them form a single Pokémon. Should one of the six be lost, the next morning there will once more be six."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511440,
				tcgplayer: 226364
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511440,
				tcgplayer: 226364
			}
		},
	],
}

export default card
