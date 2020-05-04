import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-64",

	localId: 64,

	name: {
		en: "Gastly",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/64/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/64/high",
			},

	},


	// Card Pokémon Informations

	dexId: 92,



	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Gnaw",
			},


			damage: 10,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Suffocating Gas",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.COLORLESS, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card