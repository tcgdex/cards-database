import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-67",

	localId: 67,

	name: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hironobu Yoshida",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/67/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/67/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Dome Fossil",
	},

	dexId: 140,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Fast Evolution",
			},

			text: {
				en: "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},


		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Speed Attack",
			},


			damage: 30,

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