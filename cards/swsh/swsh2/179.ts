import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-179",

	localId: 179,

	name: {
		en: "Milotic V",
	},

	tags: [
	],

	illustrator: "Ayaka Yoshida",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Aqua Impact",
			},

			text: {
				en: "This attack does 50 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
			},

			damage: "10+",

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Hypno Splash",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},

			damage: 150,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card