import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Circle Circuit",
				'fr-fr': "Cercle Électrik",
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "The plan for today is to do nothing. My awesome tail is all curled up, and my ears are tired, too.",
	},

	thirdParty: {
		cardmarket: 288465
	}
}

export default card
