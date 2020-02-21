import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/116/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/116/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
