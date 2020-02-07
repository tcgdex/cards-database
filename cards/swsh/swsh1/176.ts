import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-176",
	localId: 176,

	// Card informations
	name: {
		en: "Pokémon Center Lady",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/176/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/176/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			en: "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.",
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

