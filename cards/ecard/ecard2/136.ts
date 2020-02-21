import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-136",
	localId: 136,

	// Card informations
	name: {
		en: "Town Volunteers",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/136/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
