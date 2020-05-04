import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-57",

	localId: 57,

	name: {
		en: "Burmy Sandy Cloak",
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
				en: "https://assets.tcgdex.net/en/pl/pl4/57/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/57/high",
			},

	},


	// Card Pokémon Informations

	dexId: 412,



	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Cloak Evolution",
	},

	text: {
		en: "Burmy Sandy Cloak can evolve during the turn you play it.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Tackle",
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


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card