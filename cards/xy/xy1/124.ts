import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Red Card",
		fr: "Carton Rouge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/124/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/124/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/124/high",
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
			fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
