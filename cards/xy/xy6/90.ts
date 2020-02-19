import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-90",
	localId: 90,

	// Card informations
	name: {
		en: "Steven",
		fr: "Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/90/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/90/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/90/high.png",
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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

