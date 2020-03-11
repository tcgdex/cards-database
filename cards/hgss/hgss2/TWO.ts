import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/TWO/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/TWO/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Milky Isobe",











	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
