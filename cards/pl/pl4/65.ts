import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-65",

	localId: 65,

	name: {
		en: "Geodude",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Motofumi Fujiwara",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/65/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/65/high",
			},

	},


	// Card Pokémon Informations

	dexId: 74,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Stone Barrage",
			},

			text: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
			},

			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.LIGHTNING, 

			value: "-20",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card