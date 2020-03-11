import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM148",
	localId: "SM148",

	// Card informations
	name: {
		en: "Champions Festival",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Naoki Saito",











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
