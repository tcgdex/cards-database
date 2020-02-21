import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-85",
	localId: 85,

	// Card informations
	name: {
		en: "Department Store Girl",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
