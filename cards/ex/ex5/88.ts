import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-88",
	localId: 88,

	// Card informations
	name: {
		en: "Desert Ruins",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Shin-ichi Yoshikawa",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
