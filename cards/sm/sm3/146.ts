import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-146",
	localId: 146,

	// Card informations
	name: {
		en: "Sophocles",
		fr: "Chrys",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes de votre main. Dans ce cas, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
