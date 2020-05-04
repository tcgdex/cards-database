import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-57",

	localId: 57,

	name: {
		en: "Electrode",
	},

	tags: [
	],

	illustrator: "otumami",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Voltorb",
	},






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Orb Collector",
			},

			text: {
				en: "Search your deck for up to 3 Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Rolling Attack",
			},


			damage: 70,

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