import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-72",
	localId: 72,

	// Card informations
	name: {
		en: "Energy Recycler",
		fr: "Recycleur d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/72/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/72/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/72/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

