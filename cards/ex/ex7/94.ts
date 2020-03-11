import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-94",
	localId: 94,

	// Card informations
	name: {
		en: "Dark Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
