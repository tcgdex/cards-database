import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-80",
	localId: 80,

	// Card informations
	name: {
		en: "Oran Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/80/high",
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
