import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-39",

	localId: 39,

	name: {
		en: "Drednaw",
	},

	tags: [
	],

	illustrator: "Taira Akitsu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Chewtle",
	},



	hp: 140,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Vise Wave",
			},

			text: {
				en: "If you played Nessa from your hand during this turn, your opponent’s Active Pokémon is now Paralyzed.",
			},

			damage: 80,

		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Surf",
			},


			damage: 140,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card