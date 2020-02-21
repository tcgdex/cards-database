import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-117",
	localId: 117,

	// Card informations
	name: {
		en: "Max Revive",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/117/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
