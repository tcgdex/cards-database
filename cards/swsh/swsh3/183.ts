import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-183",

	localId: 183,

	name: {
		en: "Scizor V",
	},


	illustrator: "Satoshi Shirai",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Hack Off",
			},

			text: {
				en: "Discard a Pokémon Tool and a Special Energy from your opponent’s Active Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Slashing Claw",
			},


			damage: 140,

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