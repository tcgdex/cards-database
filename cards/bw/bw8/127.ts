import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-127",
	localId: 127,

	// Card informations
	name: {
		en: "Plasma Energy",
		fr: "Énergie Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/127/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/127/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l'Énergie Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
