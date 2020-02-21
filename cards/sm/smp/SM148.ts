import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
