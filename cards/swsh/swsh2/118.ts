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
	localId: 118,


	// Card informations
	name: {
		en: "Garbodor",
	},

	hp: 120,



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
		en: "Trubbish",
	},


	tags: [
	],

	illustrator: "AKIRA EGAWA",

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Poisonous Puddle",
	},

	text: {
		en: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Sludge Bomb",
			},

			text: {
				en: undefined,
			},

			damage: 80,

		},
	],


	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,

	rarity: Rarity.Rare, 

	category: Category.POKEMON, 


	set,
}

export default card