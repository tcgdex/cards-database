import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-22",

	localId: 22,

	name: {
		en: "Torchic",
	},


	illustrator: "Yuka Morii",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 60,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Call for Family",
			},

			text: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Live Coal",
			},


			damage: 10,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card