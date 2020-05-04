import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-124",

	localId: 124,

	name: {
		en: "Morgrem",
	},

	tags: [
	],

	illustrator: "Hitoshi Ariga",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Impidimp",
	},






	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Bite",
			},


			damage: 30,

		},
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "False Surrender",
			},

			text: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card