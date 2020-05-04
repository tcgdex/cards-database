import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-15",

	localId: 15,

	name: {
		en: "Trevenant",
	},

	tags: [
	],

	illustrator: "kawayoo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Phantump",
	},






	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Seed Bomb",
			},


			damage: 40,

		},
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Shadow Cage",
			},

			text: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card