import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		636,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon was believed to have been born from the sun. When it evolves, its entire body is engulfed in flames.",
	},

	thirdParty: {
		cardmarket: 280142,
		tcgplayer: 86627
	}
}

export default card
