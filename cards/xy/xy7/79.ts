import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-79",
	localId: 79,

	// Card informations
	name: {
		en: "Paint Roller",
		fr: "Rouleau à Peinture",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/79/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/79/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/79/high.png",
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
			fr: "Défaussez toute carte Stade en jeu. Ensuite, piochez une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

