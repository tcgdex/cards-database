import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-119",
	localId: 119,

	// Card informations
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/119/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/119/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/119/high",
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
