import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-83",
	localId: 83,

	// Card informations
	name: {
		en: "Bench Shield",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Wataru Kawahara",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
