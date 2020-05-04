import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-98",
	localId: 98,

	// Card informations
	name: {
		en: "Delinquent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/98b/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/98b/high",
		},
	},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
