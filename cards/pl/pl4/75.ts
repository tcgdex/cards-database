import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-75",

	localId: 75,

	name: {
		en: "Snorunt",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/75/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/75/high",
			},

	},


	// Card Pokémon Informations

	dexId: 361,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Ice Breath",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Double Headbutt",
			},

			text: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},

			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card