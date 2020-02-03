import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-88",
	localId: 88,

	// Card informations
	name: {
		en: "Pokémon Reversal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

