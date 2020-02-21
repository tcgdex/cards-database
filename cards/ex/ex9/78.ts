import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-78",
	localId: 78,

	// Card informations
	name: {
		en: "Lum Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 87,
		name: "Kazuo Yazawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
