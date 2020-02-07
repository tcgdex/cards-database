import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-170",
	localId: 170,

	// Card informations
	name: {
		en: "Metal Saucer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/170/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/170/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Attach a Metal Energy card from your discard pile to 1 of your Benched Metal Pokémon.",
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

