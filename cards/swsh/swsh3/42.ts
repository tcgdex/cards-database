import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-42",

	localId: 42,

	name: {
		en: "Simipour",
	},


	illustrator: "Shigenori Negishi",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Panpour",
	},



	hp: 100,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Water Gun",
			},


			damage: 30,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Giga Impact",
			},

			text: {
				en: "During your next turn, this Pokémon can’t attack.",
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card