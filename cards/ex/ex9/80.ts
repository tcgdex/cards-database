import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-80",
	localId: 80,

	// Card informations
	name: {
		en: "Oran Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Kazuo Yazawa",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
