import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-72",

	localId: 72,

	name: {
		en: "Ponyta",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/72/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/72/high",
			},

	},


	// Card Pokémon Informations

	dexId: 77,



	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Tackle",
			},


			damage: 10,

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Stomp",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			},

			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card