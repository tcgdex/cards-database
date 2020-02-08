import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-181",
	localId: 181,

	// Card informations
	name: {
		en: "Rotom Bike",
		fr: "Moticyclette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/181/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/181/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/181/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/181/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			en: "Draw cards until you have 6 cards in your hand. Your turn ends.",
			fr: "Piochez des cartes jusqu’à en avoir 6 en main. Votre tour se termine.",
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
