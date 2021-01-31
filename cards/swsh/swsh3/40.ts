import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-40",

	localId: 40,

	name: {
		en: "Relicanth",
	},


	illustrator: "MAHOU",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 90,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Fossil Search",
			},

			text: {
				en: "Search your deck for up to 2 Rare Fossil cards and put them onto your Bench. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Surf",
			},


			damage: 40,

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