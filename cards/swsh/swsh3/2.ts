import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-2",

	localId: 2,

	name: {
		en: "Butterfree VMAX",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Butterfree V",
	},



	hp: 300,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "G-Max Toxbreeze",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
			},

			damage: 150,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],




	// Card Trainer/Energy informations

}

export default card