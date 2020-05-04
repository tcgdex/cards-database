import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-3",

	localId: 3,

	name: {
		en: "Butterfree",
	},

	tags: [
	],

	illustrator: "Taira Akitsu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Metapod",
	},






	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Panic Poison",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Cutting Wind",
			},


			damage: 80,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card