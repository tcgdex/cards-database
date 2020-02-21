import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-203",
	localId: 203,

	// Card informations
	name: {
		en: "Roller Skater",
		fr: "Roller Skateuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/203/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/203/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/203/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/203/high",
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
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes. Si vous avez défaussé une carte Énergie de cette façon, piochez 2 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
