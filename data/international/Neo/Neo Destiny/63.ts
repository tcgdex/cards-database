import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'de-de': "Dratini"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shed",
				'fr-fr': "Mue",
				'de-de': "Shed"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Dratini.",
				'fr-fr': "Retirez un marqueur de dégâts sur Minidraco.",
				'de-de': "Remove 1 damage counter from Dratini."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'de-de': "Fury Attack"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Large from birth, this Pokémon increases in size throughout its life by regularly shedding its skin.",
		'fr-fr': "Grand dès sa naissance, ce Pokémon augmente de taille durant sa vie en changeant régulièrement de peau."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274715,
				tcgplayer: 84929
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274715,
				tcgplayer: 84929
			}
		}
	]
}

export default card
