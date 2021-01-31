import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-61",

	localId: 61,

	name: {
		en: "Tapu Koko",
	},


	illustrator: "Hasuno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 110,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Allure",
			},

			text: {
				en: "Draw 2 cards.",
			},


		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Electric Ball",
			},


			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],




	// Card Trainer/Energy informations

}

export default card