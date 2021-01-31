import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-120",

	localId: 120,

	name: {
		en: "Skarmory",
	},


	illustrator: "NC Empire",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 120,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Metal Arms",
			},

			text: {
				en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			},

			damage: "10+",

		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Cutting Wind",
			},


			damage: 80,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card