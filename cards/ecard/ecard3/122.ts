import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-122",
	localId: 122,

	// Card informations
	name: {
		en: "Crystal Shard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/122/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 79,
		name: "Jungo Suzuki"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
