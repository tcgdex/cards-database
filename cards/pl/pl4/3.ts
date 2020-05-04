import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-3",

	localId: 3,

	name: {
		en: "Heatran",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiko Moritsugu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/3/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/3/high",
			},

	},


	// Card Pokémon Informations

	dexId: 485,



	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Fire Fang",
			},

			text: {
				en: "The Defending Pokémon is now Burned.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Magma Mantle",
			},

			text: {
				en: "Discard the top 3 cards of your deck. This attack does 60 damage plus 20 more damage for each Fire or Metal Energy card you discarded.",
			},

			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card