import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-175",
	localId: 175,

	// Card informations
	name: {
		en: "Pokémon Catcher",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/175/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/175/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
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

