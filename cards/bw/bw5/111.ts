import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-111",
	localId: 111,

	// Card informations
	name: {
		en: "Pokémon Catcher",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},











	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
