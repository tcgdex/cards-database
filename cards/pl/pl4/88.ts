import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-88",
	localId: 88,

	// Card informations
	name: {
		en: "Lucky Egg",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 145,
		name: "Nobuyuki Fujimoto"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card

