import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-103",
	localId: 103,

	// Card informations
	name: {
		en: "Roller Skates",
		fr: "Rollers",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/103/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/103/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/103/high.png",
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
			fr: "Lancez une pièce. Si c'est face, piochez 3 cartes.",
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

