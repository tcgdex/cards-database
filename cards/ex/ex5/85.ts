import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-85",
	localId: 85,

	// Card informations
	name: {
		en: "Ancient Technical Machine (Rock)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
