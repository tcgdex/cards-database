import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swsh2'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `${set.code}-${localId}`,
	localId: 18,


	// Card informations
	name: {
		en: "Rillaboom VMAX",
	},

	hp: 330,



	// image?: {
	//	low: {
	//		en: `https://assets.tcgdex.net/en/swsh/${set.code}/${localId}/low`
	//		fr: `https://assets.tcgdex.net/fr/swsh/${set.code}/${localId}/low`
	//	},
	//	high: {
	//		en: `https://assets.tcgdex.net/en/swsh/${set.code}/${localId}/high`
	//		fr: `https://assets.tcgdex.net/fr/swsh/${set.code}/${localId}/high`
	//	}
	//}


	evolveFrom: {
		en: "Rillaboom V",
	},


	tags: [
	],

	illustrator: "5ban Graphics",


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Scratch",
			},

			text: {
				en: undefined,
			},

			damage: 50,

		},
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Max Beating",
			},

			text: {
				en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
			},

			damage: "130+",

		},
	],


	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,

	rarity: Rarity.RareVMAX, 

	category: Category.POKEMON, 


	set,
}

export default card