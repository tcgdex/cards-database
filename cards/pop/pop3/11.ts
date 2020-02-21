import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Low Pressure System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/11/high",
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
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
