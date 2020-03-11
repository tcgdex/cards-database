import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-109",
	localId: 109,

	// Card informations
	name: {
		en: "Battle Reporter",
		fr: "Journaliste des Combats",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez des cartes jusqu'à ce que vous ayez le même nombre de cartes dans votre main que votre adversaire.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
