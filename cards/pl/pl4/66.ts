import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-66",

	localId: 66,

	name: {
		en: "Gulpin",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/66/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/66/high",
			},

	},


	// Card Pokémon Informations

	dexId: 316,



	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Collect",
			},

			text: {
				en: "Draw a card.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Drool",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card