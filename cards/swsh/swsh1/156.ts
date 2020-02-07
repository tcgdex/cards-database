import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-156",
	localId: 156,

	// Card informations
	name: {
		en: "Air Balloon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/156/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/156/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],





	attacks: [{
		name: {},
		text: {
			en: "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less.",
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

