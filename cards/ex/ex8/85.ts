import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-85",
	localId: 85,

	// Card informations
	name: {
		en: "Crystal Shard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 79,
		name: "Jungo Suzuki"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

