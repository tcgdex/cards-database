import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-122",
	localId: 122,

	// Card informations
	name: {
		en: "Professor Sycamore",
		fr: "Professeur Platane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/122/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/122/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
