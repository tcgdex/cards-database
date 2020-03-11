import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-125",
	localId: 125,

	// Card informations
	name: {
		en: "Roller Skates",
		fr: "Rollers",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/125/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/125/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/125/high",
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
		name: "XY",
		code: "xy1"
	}
}

export default card
