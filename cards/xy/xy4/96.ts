import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Hand Scope",
		fr: "Scrute Main",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/96/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/96/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/96/high.png",
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
			fr: "Votre adversaire montre sa main.",
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

