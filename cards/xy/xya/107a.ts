import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xya-107a",
	localId: "107a",

	// Card informations
	name: {
		fr: "Professeur Platane",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/107a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/107a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
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
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
