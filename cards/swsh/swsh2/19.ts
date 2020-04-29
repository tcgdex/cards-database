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
	localId: 19,


	// Card informations
	name: {
		en: "Eldegoss V",
	},

	hp: 180,



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




	tags: [
	],

	illustrator: "5ban Graphics",

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Happy Match",
	},

	text: {
		en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Float Up",
			},

			text: {
				en: "You may shuffle this Pokémon and all attached cards into your deck.",
			},

			damage: 50,

		},
	],


	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,

	rarity: Rarity.RareV, 

	category: Category.POKEMON, 


	set,
}

export default card