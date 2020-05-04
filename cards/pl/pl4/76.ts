import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-76",

	localId: 76,

	name: {
		en: "Tangela",
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
				en: "https://assets.tcgdex.net/en/pl/pl4/76/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/76/high",
			},

	},


	// Card Pokémon Informations

	dexId: 114,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Absorb",
			},

			text: {
				en: "Remove 1 damage counter from Tangela.",
			},

			damage: 10,

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Sleep Powder",
			},

			text: {
				en: "The Defending Pokémon is now Asleep.",
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

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card