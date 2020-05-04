import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-85",
	localId: 85,

	// Card informations
	name: {
		en: "Pow! Hand Extension",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ROCKETSECRETMACHINE,
	],

	illustrator: "Katsura Tabata",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
