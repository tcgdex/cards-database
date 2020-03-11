import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Hand Scope",
		fr: "Scrute Main",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire montre sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
