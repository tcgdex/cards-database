import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Icy Snow",
				'fr-fr': "Verglas",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Snowy mountains are this Pokémon's habitat. During an ancient ice age, they moved to southern areas.",
	},

	thirdParty: {
		cardmarket: 280257,
		tcgplayer: 90264
	}
}

export default card
