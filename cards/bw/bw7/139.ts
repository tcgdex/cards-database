import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-139",
	localId: 139,

	// Card informations
	name: {
		en: "Crystal Wall",
		fr: "Mur de Cristal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/139/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/139/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/139/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Si cette carte est attachée à Kyurem Noir-EX, ses PV maximum sont de 300.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
