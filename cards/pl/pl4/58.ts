import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-58",

	localId: 58,

	name: {
		en: "Burmy Trash Cloak",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/58/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/58/high",
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
		en: "Burmy Trash Cloak can evolve during the turn you play it.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.METAL,
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