import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Double Colorless Energy",
		fr: "Énergie doublement incolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/103/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/103/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "L’énergie doublement incolore fournit de l’énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

