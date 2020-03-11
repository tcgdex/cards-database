import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-103",
	localId: 103,

	// Card informations
	name: {
		en: "Roller Skates",
		fr: "Rollers",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, piochez 3 cartes.",
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
