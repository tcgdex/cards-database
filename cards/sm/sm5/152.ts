import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-152",
	localId: 152,

	// Card informations
	name: {
		en: "Looker",
		fr: "Beladonis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/152/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/152/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/152/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/152/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes du dessous de votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

