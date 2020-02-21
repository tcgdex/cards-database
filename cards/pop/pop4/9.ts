import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-9",
	localId: 9,

	// Card informations
	name: {
		en: "Pokémon Fan Club",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/9/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
