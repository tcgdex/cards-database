import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-105",
	localId: 105,

	// Card informations
	name: {
		en: "N",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/105a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/105a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",











	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
