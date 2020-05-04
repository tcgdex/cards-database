import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-78",

	localId: 78,

	name: {
		en: "Treecko",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/78/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/78/high",
			},

	},


	// Card Pokémon Informations

	dexId: 252,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Tail Crush",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			},

			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.WATER, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card