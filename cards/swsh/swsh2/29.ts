import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-29",

	localId: 29,

	name: {
		en: "Magmar",
	},

	tags: [
	],

	illustrator: "Shigenori Negishi",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Punch",
			},


			damage: 10,

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Heat Breath",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
			},

			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card