import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-115",
	localId: 115,

	// Card informations
	name: {
		en: "Ultra Space",
		fr: "Ultra-Dimension",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher une carte Ultra-Chimère dans son deck, la montrer, la placer dans sa main, puis mélanger son deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
