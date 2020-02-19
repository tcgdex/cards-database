import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-105",
	localId: 105,

	// Card informations
	name: {
		en: "Special Charge",
		fr: "Recharge Spéciale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/105/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/105/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/105/high.png",
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
			fr: "Mélangez 2 cartes Énergie spéciale de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

