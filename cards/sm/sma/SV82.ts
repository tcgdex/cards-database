import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV82",
	localId: "SV82",

	// Card informations
	name: {
		en: "Cynthia",
		fr: "Cynthia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV82/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV82/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV82/high.png",
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
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

