import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-11",
	localId: 11,

	// Card informations
	name: {
		en: "TV Reporter",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
