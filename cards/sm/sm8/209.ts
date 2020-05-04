import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-209",
	localId: 209,

	// Card informations
	name: {
		en: "Judge",
		fr: "Juge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/209/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/209/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/209/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/209/high",
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
			fr: "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
