import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Basculin",
		'fr-fr': "Bargantua",
		'es-es': "Basculin",
		'it-it': "Basculin",
		'pt-br': "Basculin",
		'de-de': "Barschuft"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Final Gambit",
				'fr-fr': "Tout ou Rien",
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are tails, this Pokémon does 80 damage to itself.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés pile, ce Pokémon s'inflige 80 dégâts.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Red and blue Basculin get along so poorly, they'll start fighting instantly. These Pokémon are very hostile.",
	},

	thirdParty: {
		cardmarket: 279989,
		tcgplayer: 83731
	}
}

export default card
