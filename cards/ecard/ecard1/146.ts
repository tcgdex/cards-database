import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-146",
	localId: 146,

	// Card informations
	name: {
		en: "Pokémon Reversal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/146/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
