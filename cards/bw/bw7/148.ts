import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-148",
	localId: 148,

	// Card informations
	name: {
		en: "Cheren",
		fr: "Tcheren",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/148/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/148/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
