import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-113",
	localId: 113,

	// Card informations
	name: {
		en: "Lugia LEGEND",
		fr: "Lugia LÉGENDAIRE",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/113/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/113/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: "Shinji Higuchi",











	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
