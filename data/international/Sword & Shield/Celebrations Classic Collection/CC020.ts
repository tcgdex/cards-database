import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Outrage",
			'fr-fr': "Vent Brûlant"
		},

		effect: {
			'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Blue Flare",
			'fr-fr': "Flamme Noire"
		},

		effect: {
			'en-us': "Discard 2 Fire Energy attached to this Pokémon.",
			'fr-fr': "Si Zekrom est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "This Pokémon appears in legends. It sends flames into the air from its tail, burning up everything around it."
	},


	variants: [
		{
			type: 'holo',
			stamp: ['25th-celebration'],
			thirdParty: {
				cardmarket: 576747,
				tcgplayer: 250301
			}
		},
	],
}

export default card
