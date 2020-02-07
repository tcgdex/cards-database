import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-166",
	localId: 166,

	// Card informations
	name: {
		en: "Hyper Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/166/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/166/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Heal 120 damage from 1 of your Pokémon that has at least 2 Energy attached. If you healed any damage in this way, discard 2 Energy from it.",
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

