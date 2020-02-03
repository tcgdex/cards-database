import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Cassius",
		fr: "Olivier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/115/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/115/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/115/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez l'un de vos Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
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

