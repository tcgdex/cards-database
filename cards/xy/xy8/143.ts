import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-143",
	localId: 143,

	// Card informations
	name: {
		en: "Judge",
		fr: "Juge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/143/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/143/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur mélange sa main avec son deck, puis pioche 4 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
