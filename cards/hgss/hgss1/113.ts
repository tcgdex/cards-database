import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 167,
		name: "Shinji Higuchi"
	},











	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
