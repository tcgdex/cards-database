import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Double Assist",
				'fr-fr': "Double Assistance",
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à 1 de vos Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tumbling Attack",
				'fr-fr': "Attaque Trébuchante",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Sometimes the magnetism emitted by Magnezone is too strong, making them attract each other so they cannot move.",
	},

	thirdParty: {
		cardmarket: 280787,
		tcgplayer: 87119
	}
}

export default card
