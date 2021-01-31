import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-64",

	localId: 64,

	name: {
		en: "Pincurchin",
	},


	illustrator: "Shin Nagasawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 80,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Double Draw",
			},

			text: {
				en: "Draw 2 cards.",
			},


		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Zing Zap",
			},

			text: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card