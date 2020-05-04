import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-SH12",

	localId: "SH12",

	name: {
		en: "Shinx",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/SH12/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/SH12/high",
			},

	},


	// Card Pokémon Informations

	dexId: 403,



	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Star Barrier",
	},

	text: {
		en: "As long as Shinx has any Energy attached to it, Shinx has no Weakness.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Payback",
			},

			text: {
				en: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 30 more damage.",
			},

			damage: "10+",

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