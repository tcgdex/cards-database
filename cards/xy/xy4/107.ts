import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-107",
	localId: 107,

	// Card informations
	name: {
		en: "Tierno",
		fr: "Tierno",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/107/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/107/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/107/high.png",
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
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

