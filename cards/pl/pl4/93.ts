import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-93",
	localId: 93,

	// Card informations
	name: {
		en: "Helix Fossil",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/93/high",
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
