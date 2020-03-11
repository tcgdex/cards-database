import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss1/103/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/103/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Kent Kanetsuna",



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
