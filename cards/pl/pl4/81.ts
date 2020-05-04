import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-81",

	localId: 81,

	name: {
		en: "Wingull",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/81/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/81/high",
			},

	},


	// Card Pokémon Informations

	dexId: 278,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Rain Splash",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card