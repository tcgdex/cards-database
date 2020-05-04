import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-34",

	localId: 34,

	name: {
		en: "Bronzor",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/34/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/34/high",
			},

	},


	// Card Pokémon Informations

	dexId: 436,



	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Speed Dive",
			},


			damage: 10,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Extrasensory",
			},

			text: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 30 damage plus 30 more damage.",
			},

			damage: "30+",

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
			type: Type.PSYCHIC, 

			value: "-20",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card