import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Fiery Torch",
		fr: "Flambeau Incandescent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/89/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/89/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/89/high.png",
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
			fr: "Défaussez une carte Énergie Fire de votre main. (Si vous ne pouvez pas défausser une carte Énergie Fire, vous ne pouvez pas jouer cette carte.) Piochez 2 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

