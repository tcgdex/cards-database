import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-189",
	localId: 189,

	// Card informations
	name: {
		en: "Cynthia & Caitlin",
		fr: "Cynthia et Percila",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/189/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/189/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/189/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/189/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main. Vous ne pouvez pas choisir Cynthia et Percila ou une carte défaussée du fait de l’effet de cette carte.\n\nLorsque vous jouez cette carte, vous pouvez défausser une autre carte de votre main. Dans ce cas, piochez 3 cartes.",
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
