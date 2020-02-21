import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-88",
	localId: 88,

	// Card informations
	name: {
		en: "Desert Ruins",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
