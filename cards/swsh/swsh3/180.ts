import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-180",

	localId: 180,

	name: {
		en: "Vikavolt V",
	},


	illustrator: "Ayaka Yoshida",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Paralyzing Bolt",
			},

			text: {
				en: "During your opponent’s next turn, they can’t play any Item cards from their hand.",
			},

			damage: 50,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Super Zap Cannon",
			},

			text: {
				en: "Discard 2 Energy from this Pokémon.",
			},

			damage: 190,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card