import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-127",

	localId: 127,

	name: {
		en: "Klinklang",
	},


	illustrator: "Naoki Saito",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Klang",
	},



	hp: 150,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Beam",
			},


			damage: 60,

		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Clockwork",
			},

			text: {
				en: "If you don’t have Klink and Klang on your Bench, this attack does nothing.",
			},

			damage: 200,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card