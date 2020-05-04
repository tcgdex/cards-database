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
	localId: 50,

	dexId: 888,

	// Card informations
	name: {
		en: "Inteleon VMAX",
	},

	hp: 320,

	type: [
		Type.WATER,
	],


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
		en: "Inteleon V",
	},


	tags: [
		Tag.VMAX,
	],

	illustrator: "5ban Graphics",


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Hydro Snipe",
			},

			text: {
				en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			},

			damage: 60,

		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Max Bullet",
			},

			text: {
				en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 160,

		},
	],


	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 2,

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 


	set,
}

export default card