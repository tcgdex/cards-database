import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Boost Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/8/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
