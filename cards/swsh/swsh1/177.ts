import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-177",
	localId: 177,

	// Card informations
	name: {
		en: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/177/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/177/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
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

