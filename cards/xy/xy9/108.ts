import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-108",
	localId: 108,

	// Card informations
	name: {
		en: "Psychic's Third Eye",
		fr: "Troisième Œil du Kinésiste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/108/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/108/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire montre sa main.\n\nDéfaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

