import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-85",
	localId: 85,

	// Card informations
	name: {
		en: "Holon Adventurer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
