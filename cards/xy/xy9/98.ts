import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-98",
	localId: 98,

	// Card informations
	name: {
		en: "Delinquent",
		fr: "Terreur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/98/high.png",
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
			fr: "Défaussez toute carte Stade en jeu. Dans ce cas, votre adversaire défausse 3 cartes de sa main.",
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

