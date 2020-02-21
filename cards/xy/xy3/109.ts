import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



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
