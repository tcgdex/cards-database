import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-88",
	localId: 88,

	// Card informations
	name: {
		en: "Lucky Egg",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Nobuyuki Fujimoto",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
