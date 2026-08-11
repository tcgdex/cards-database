import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Shower",
				'fr-fr': "Aqua-douche"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dual Cut",
				'fr-fr': "Coupe Double"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
	},

	thirdParty: {
		cardmarket: 281310
	}
}

export default card
