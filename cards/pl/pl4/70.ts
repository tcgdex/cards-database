import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-70",

	localId: 70,

	name: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/70/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/70/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Helix Fossil",
	},

	dexId: 138,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Collect",
			},

			text: {
				en: "Draw 3 cards.",
			},


		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Tickle",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "+20",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card