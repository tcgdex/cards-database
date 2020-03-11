import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-ONE",
	localId: "ONE",

	// Card informations
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d’Alph",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/ONE/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/ONE/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/ONE/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/ONE/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Milky Isobe",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez la main de votre adversaire !",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
