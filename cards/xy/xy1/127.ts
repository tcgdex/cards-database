import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-127",
	localId: 127,

	// Card informations
	name: {
		en: "Shauna",
		fr: "Sannah",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/127/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/127/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/127/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
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

