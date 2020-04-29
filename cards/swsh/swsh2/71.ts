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
	localId: 71,


	// Card informations
	name: {
		en: "Toxtricity VMAX",
	},

	hp: 320,



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
		en: "Toxtricity V",
	},


	tags: [
	],

	illustrator: "5ban Graphics",


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "G-Max Riot",
			},

			text: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 80 more damage.",
			},

			damage: "160+",

		},
	],


	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,

	rarity: Rarity.RareVMAX, 

	category: Category.POKEMON, 


	set,
}

export default card