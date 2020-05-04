import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-12",

	localId: 12,

	name: {
		en: "Zapdos",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryota Saito",

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/12/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/12/high",
			},

	},


	// Card Pokémon Informations

	dexId: 145,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Charge Beam",
			},

			text: {
				en: "Flip a coin. If heads, search your discard pile for an Energy card and attach it to Zapdos .",
			},

			damage: 10,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Lightning Strike",
			},

			text: {
				en: "You may discard all Lightning Energy attached to Zapdos . If you do, this attack's base damage is 80 instead of 40.",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING,
			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING,
			value: "-20",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card
