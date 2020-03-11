import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Low Pressure System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/11/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Shin-ichi Yoshikawa",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
