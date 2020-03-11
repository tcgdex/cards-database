import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-107",
	localId: 107,

	// Card informations
	name: {
		en: "Tierno",
		fr: "Tierno",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
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
