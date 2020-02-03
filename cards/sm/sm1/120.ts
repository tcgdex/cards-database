import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Hau",
		fr: "Tili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/120/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/120/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/120/high.png",
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

