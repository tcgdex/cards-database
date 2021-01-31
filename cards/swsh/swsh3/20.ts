import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-20",

	localId: 20,

	name: {
		en: "Charizard VMAX",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Charizard V",
	},



	hp: 330,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Claw Slash",
			},


			damage: 100,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "G-Max Wildfire",
			},

			text: {
				en: "Discard 2 Energy from this Pokémon.",
			},

			damage: 300,

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