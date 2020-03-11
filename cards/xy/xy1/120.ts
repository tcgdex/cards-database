import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Max Revive",
		fr: "Rappel Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/120/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/120/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/120/high",
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
			fr: "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
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
