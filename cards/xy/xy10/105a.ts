import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},











	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
