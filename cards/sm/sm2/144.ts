import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-144",
	localId: 144,

	// Card informations
	name: {
		en: "Hau",
		fr: "Tili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
