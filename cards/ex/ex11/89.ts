import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "\"Big Mama\" Tagawa",



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
