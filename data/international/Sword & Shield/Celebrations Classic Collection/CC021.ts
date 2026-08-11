import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		'en-us': "Zekrom",
		'fr-fr': "Zekrom"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Outrage",
			'fr-fr': "Broyeur de Terrain"
		},

		effect: {
			'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Si votre adversaire a un Stade en jeu, défaussez-le."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Bolt Strike",
			'fr-fr': "Tonnerre Blanc"
		},

		effect: {
			'en-us': "This Pokémon does 40 damage to itself.",
			'fr-fr': "Si Reshiram est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "This Pokémon appears in legends. In its tail, it has a giant generator that creates electricity."
	},


	variants: [
		{
			type: 'holo',
			stamp: ['25th-celebration'],
			thirdParty: {
				cardmarket: 576755,
				tcgplayer: 250308
			}
		},
	],
}

export default card
