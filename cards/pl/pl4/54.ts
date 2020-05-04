import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-54",

	localId: 54,

	name: {
		en: "Bronzor",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/54/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/54/high",
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
				en: "Hypnosis",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			},

			damage: 10,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Spinning Attack",
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
			type: Type.PSYCHIC, 

			value: "-20",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card