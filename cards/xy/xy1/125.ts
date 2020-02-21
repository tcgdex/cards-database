import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-125",
	localId: 125,

	// Card informations
	name: {
		en: "Roller Skates",
		fr: "Rollers",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/125/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/125/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/125/high",
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
		name: "XY",
		code: "xy1"
	}
}

export default card
