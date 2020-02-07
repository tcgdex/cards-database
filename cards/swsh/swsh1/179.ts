import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-179",
	localId: 179,

	// Card informations
	name: {
		en: "Quick Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/179/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/179/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
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

