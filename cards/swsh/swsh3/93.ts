import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-93",

	localId: 93,

	name: {
		en: "Hippopotas",
	},


	illustrator: "Shin Nagasawa",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 100,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Tackle",
			},


			damage: 10,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Double Stomp",
			},

			text: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			},

			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card