import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-74",

	localId: 74,

	name: {
		en: "Shinx",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/74/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/74/high",
			},

	},


	// Card Pokémon Informations

	dexId: 403,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Gnaw",
			},


			damage: 10,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Swagger",
			},

			text: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.METAL, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card