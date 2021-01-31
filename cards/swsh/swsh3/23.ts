import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-23",

	localId: 23,

	name: {
		en: "Combusken",
	},


	illustrator: "kodama",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Torchic",
	},



	hp: 90,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Smash Kick",
			},


			damage: 20,

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Heat Beak",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},

			damage: 40,

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