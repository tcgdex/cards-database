import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-48",

	localId: 48,

	name: {
		en: "Cubchoo",
	},


	illustrator: "Saya Tsuruta",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 70,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Chop",
			},


			damage: 10,

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Icicle",
			},


			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card