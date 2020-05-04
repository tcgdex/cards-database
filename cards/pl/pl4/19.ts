import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-19",

	localId: 19,

	name: {
		en: "Golem",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/19/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/19/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Graveler",
	},

	dexId: 76,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Lunge Out",
			},


			damage: 50,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Tumble Down",
			},

			text: {
				en: "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Fighting Energy cards you discarded.",
			},

			damage: "30x",

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Rock Tumble",
			},

			text: {
				en: "This attack's damage isn't affected by Resistance.",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "+30",

		},
	],

	resistances: [
		{
			type: Type.LIGHTNING, 

			value: "-20",

		},
	],

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card