import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-180",

	localId: 180,

	name: {
		en: "Inteleon V",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Snipe Shot",
			},

			text: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Aqua Report",
			},

			text: {
				en: "Your opponent reveals their hand.",
			},

			damage: 130,

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