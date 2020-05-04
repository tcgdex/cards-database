import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Cleffa",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
		},
		text: {
			en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
		}
	}],

	attacks: [{
		name: {
			en: "Eeeeeeek",
		},
		text: {
			en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
