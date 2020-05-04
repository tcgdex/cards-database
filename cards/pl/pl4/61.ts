import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-61",

	localId: 61,

	name: {
		en: "Croagunk",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/61/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/61/high",
			},

	},


	// Card Pokémon Informations

	dexId: 453,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Astonish",
			},

			text: {
				en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
			},


		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Punch",
			},


			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card