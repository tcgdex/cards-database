import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Whip",
				'fr-fr': "Double Fouet",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Relaxing Fragrance",
				'fr-fr': "Parfum Relaxant",
			},
			effect: {
				'en-us': "Heal 30 damage and remove all Special Conditions from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The more healthy the Roselia, the more pleasant its flowers' aroma. Its scent deeply relaxes people.",
	},

	thirdParty: {
		cardmarket: 280451,
		tcgplayer: 88824
	}
}

export default card
