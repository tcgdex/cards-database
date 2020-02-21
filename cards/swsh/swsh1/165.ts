import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-165",
	localId: 165,

	// Card informations
	name: {
		en: "Hop",
		fr: "Nabil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/165/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/165/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 66,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
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
