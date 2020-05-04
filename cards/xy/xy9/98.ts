import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy9/98/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/98/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez toute carte Stade en jeu. Dans ce cas, votre adversaire défausse 3 cartes de sa main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
