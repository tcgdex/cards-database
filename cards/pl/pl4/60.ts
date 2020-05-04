import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-60",

	localId: 60,

	name: {
		en: "Cherubi",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/60/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/60/high",
			},

	},


	// Card Pokémon Informations

	dexId: 420,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Ram",
			},


			damage: 10,

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Solarbeam",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.WATER, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card