import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-114",
	localId: 114,

	// Card informations
	name: {
		en: "Double Colorless Energy",
		fr: "Double Énergie Incolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/114/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/114/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Double Énergie Incolore fournit de l'Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
