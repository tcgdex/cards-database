import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-35",

	localId: 35,

	name: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/35/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/35/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Charmander",
	},

	dexId: 5,



	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Slam",
			},

			text: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},

			damage: "30x",

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Fire Punch",
			},


			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "+20",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card