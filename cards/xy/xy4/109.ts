import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-109",
	localId: 109,

	// Card informations
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
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
