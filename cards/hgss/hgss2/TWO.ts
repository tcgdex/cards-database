import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-TWO",
	localId: "TWO",

	// Card informations
	name: {
		en: "Alph Lithograph",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/TWO/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/TWO/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 129,
		name: "Milky Isobe"
	},











	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

