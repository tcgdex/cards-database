import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-69",

	localId: 69,

	name: {
		en: "Nosepass",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/69/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/69/high",
			},

	},


	// Card Pokémon Informations

	dexId: 299,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Harden",
			},

			text: {
				en: "During your opponent's next turn, if Nosepass would be damaged by an attack, prevent that attack's damage done to Nosepass if that damage is 30 or less.",
			},


		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Knock Away",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			},

			damage: "20+",

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