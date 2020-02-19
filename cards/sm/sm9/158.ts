import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-158",
	localId: 158,

	// Card informations
	name: {
		en: "Wondrous Labyrinth ◇",
		fr: "Labyrinthe Miracle ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/158/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/158/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/158/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/158/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
