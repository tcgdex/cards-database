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
	localId: 93,


	// Card informations
	name: {
		en: "Dragapult VMAX",
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
		en: "Dragapult V",
	},


	tags: [
	],

	illustrator: "aky CG Works",


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Shred",
			},

			text: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
			},

			damage: 60,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
			],

			name: {
				en: "Max Phantom",
			},

			text: {
				en: "Put 5 damage counters on your opponent’s Benched Pokémon in any way you like.",
			},

			damage: 130,

		},
	],


	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 1,

	rarity: Rarity.RareVMAX, 

	category: Category.POKEMON, 


	set,
}

export default card