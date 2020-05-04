import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-63",

	localId: 63,

	name: {
		en: "Electrike",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/63/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/63/high",
			},

	},


	// Card Pokémon Informations

	dexId: 309,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Bite",
			},


			damage: 10,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.METAL, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card