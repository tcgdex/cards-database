import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-159",
	localId: 159,

	// Card informations
	name: {
		en: "Crushing Hammer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/159/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/159/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
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

