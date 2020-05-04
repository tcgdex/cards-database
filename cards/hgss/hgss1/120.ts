import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/120/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/120/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
