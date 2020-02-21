import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-86",
	localId: 86,

	// Card informations
	name: {
		en: "Rocket's Admin.",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/86/high",
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
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
