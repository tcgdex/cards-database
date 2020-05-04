import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-39",

	localId: 39,

	name: {
		en: "Grovyle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/39/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/39/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Treecko",
	},

	dexId: 253,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Quick Attack",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			},

			damage: "20+",

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Cut",
			},


			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+20",

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