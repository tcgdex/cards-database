import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-113",

	localId: 113,

	name: {
		en: "Thievul",
	},


	illustrator: "Akira Komayama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Nickit",
	},



	hp: 100,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Nasty Plot",
			},

			text: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
			],

			name: {
				en: "Sharp Fang",
			},


			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card