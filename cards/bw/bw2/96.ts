import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-96",
	localId: 96,

	// Card informations
	name: {
		en: "Recycle",
		fr: "Recyclage",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, placez une carte de votre pile de défausse sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
