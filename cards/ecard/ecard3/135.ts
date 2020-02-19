import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-135",
	localId: 135,

	// Card informations
	name: {
		en: "Mystery Plate Gamma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/135/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card

