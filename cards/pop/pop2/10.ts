import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Pokémon Park",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 87,
		name: "Kazuo Yazawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
