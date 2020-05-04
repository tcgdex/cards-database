import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-30",

	localId: 30,

	name: {
		en: "Magmortar",
	},

	tags: [
	],

	illustrator: "Kazuma Koda",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Magmar",
	},






	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Burst Punch",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Ground Burn",
			},

			text: {
				en: "Each player discards the top card of their deck. This attack does 100 more damage for each Energy card discarded in this way.",
			},

			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card