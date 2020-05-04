import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-SH10",

	localId: "SH10",

	name: {
		en: "Bagon",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/SH10/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/SH10/high",
			},

	},


	// Card Pokémon Informations

	dexId: 371,



	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Star Barrier",
	},

	text: {
		en: "As long as Bagon has any Energy attached to it, Bagon has no Weakness.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Dragon Rage",
			},

			text: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: Type.COLORLESS, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card