import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Multi Technical Machine 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TECHNICALMACHINE,
	],

	illustrator: {
		id: 56,
		name: "\"Big Mama\" Tagawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
