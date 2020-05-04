import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-53",

	localId: 53,

	name: {
		en: "Beedrill",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Wataru Kawahara",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/53/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/53/high",
			},

	},


	// Card Pokémon Informations

	dexId: 15,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Raid",
			},

			text: {
				en: "If you played Beedrill from your hand during this turn, this attack's base damage is 40 instead of 10.",
			},

			damage: 10,

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Fury Attack",
			},

			text: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			},

			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card