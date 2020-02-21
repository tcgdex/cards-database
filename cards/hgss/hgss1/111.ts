import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Ho-Oh LEGEND",
		fr: "Ho-Oh LÉGENDAIRE",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/111/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/111/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/111/high",
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
