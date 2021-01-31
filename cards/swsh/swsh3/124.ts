import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-124",

	localId: 124,

	name: {
		en: "Escavalier",
	},


	illustrator: "Anesaki Dynamic",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Karrablast",
	},



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
				en: "Fury Cutter",
			},

			text: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 70 more damage. If all of them are heads, this attack does 140 more damage.",
			},

			damage: "10+",

		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Seashell Attack",
			},


			damage: 60,

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

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card