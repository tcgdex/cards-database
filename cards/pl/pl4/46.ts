import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-46",

	localId: 46,

	name: {
		en: "Ponyta",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/46/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/46/high",
			},

	},


	// Card Pokémon Informations

	dexId: 77,



	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Ascension",
			},

			text: {
				en: "Search your deck for a card that evolves from Ponyta and put it onto Ponyta. (This counts as evolving Ponyta.) Shuffle your deck afterward.",
			},


		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Combustion",
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