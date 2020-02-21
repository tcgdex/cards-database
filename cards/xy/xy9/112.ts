import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-112",
	localId: 112,

	// Card informations
	name: {
		en: "Tierno",
		fr: "Tierno",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/112/high",
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



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
