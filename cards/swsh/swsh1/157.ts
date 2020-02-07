import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-157",
	localId: 157,

	// Card informations
	name: {
		en: "Bede",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/157/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/157/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			en: "Attach a basic Energy card from your hand to 1 of your Benched Pokémon.",
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

