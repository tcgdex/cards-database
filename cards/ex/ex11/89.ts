import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-89",
	localId: 89,

	// Card informations
	name: {
		en: "Dual Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 56,
		name: "\"Big Mama\" Tagawa"
	},



	attacks: [{
		name: {
			en: "Dual Ball",
		},
		text: {
			en: "Flip 2 coins. For each head, search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
