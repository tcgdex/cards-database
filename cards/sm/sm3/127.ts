import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-127",
	localId: 127,

	// Card informations
	name: {
		en: "Wicke",
		fr: "Vicky",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/127/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/127/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 163,
		name: "take"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur compte les cartes qu’il a en main, les mélange dans son deck, puis pioche ce même nombre de cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
