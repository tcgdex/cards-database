import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-103",
	localId: 103,

	// Card informations
	name: {
		en: "Max Potion",
		fr: "Potion Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez tous les dégâts de l'un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées au Pokémon choisi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
