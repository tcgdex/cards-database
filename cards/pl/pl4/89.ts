import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-89",
	localId: 89,

	// Card informations
	name: {
		en: "Old Amber",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/89/high",
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











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
