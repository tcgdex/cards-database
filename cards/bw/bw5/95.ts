import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-95",
	localId: 95,

	// Card informations
	name: {
		en: "Hooligans Jim & Cas",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
