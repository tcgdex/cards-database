import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-90",
	localId: 90,

	// Card informations
	name: {
		en: "Great Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Nakaoka",



	attacks: [{
		name: {
			en: "Great Ball",
		},
		text: {
			en: "Search your deck for a Basic Pokémon (excluding Pokémon-ex) and put it onto your Bench. Shuffle your deck afterward.",
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
