import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-163",
	localId: 163,

	// Card informations
	name: {
		en: "Copycat",
		fr: "Copieuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/163/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/163/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/163/high",
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
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
