import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-59",

	localId: 59,

	name: {
		en: "Charmander",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/59/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/59/high",
			},

	},


	// Card Pokémon Informations

	dexId: 4,



	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Call for Friends",
			},

			text: {
				en: "Search your deck for a Fire Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},


		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Steady Firebreathing",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card