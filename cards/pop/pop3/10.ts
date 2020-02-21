import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-10",
	localId: 10,

	// Card informations
	name: {
		en: "High Pressure System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/10/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
