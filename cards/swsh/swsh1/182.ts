import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-182",
	localId: 182,

	// Card informations
	name: {
		en: "Sitrus Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/182/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/182/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],





	attacks: [{
		name: {},
		text: {
			en: "At the end of each turn, if the Pokémon this card is attached to has 3 or more damage counters on it, heal 30 damage from it and discard this card.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

