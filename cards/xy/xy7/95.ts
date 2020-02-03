import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-95",
	localId: 95,

	// Card informations
	name: {
		en: "Steven",
		fr: "Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/95/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/95/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Supporter et une carte Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

