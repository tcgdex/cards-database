import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Dome Fossil",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
