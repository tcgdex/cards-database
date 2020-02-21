import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-131",
	localId: 131,

	// Card informations
	name: {
		en: "Pokémon Park",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/131/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 87,
		name: "Kazuo Yazawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
