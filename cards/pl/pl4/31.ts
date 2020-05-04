import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-31",

	localId: 31,

	name: {
		en: "Sceptile",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/31/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/31/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Grovyle",
	},

	dexId: 254,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Leaf Supply",
			},

			text: {
				en: "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Dual Cut",
			},

			text: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
			},

			damage: "70x",

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+30",

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