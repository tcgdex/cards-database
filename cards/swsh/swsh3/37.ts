import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-37",

	localId: 37,

	name: {
		en: "Suicune",
	},


	illustrator: "so-taro",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 120,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Wave Splash",
			},


			damage: 20,

		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Aurora Loop",
			},

			text: {
				en: "Put 2 Water Energy attached to this Pokémon into your hand.",
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


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card