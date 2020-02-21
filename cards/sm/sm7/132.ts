import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-132",
	localId: 132,

	// Card informations
	name: {
		en: "Hau",
		fr: "Tili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/132/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/132/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/132/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
