import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-191",
	localId: 191,

	// Card informations
	name: {
		en: "Erika",
		fr: "Erika",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/191/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/191/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/191/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur peut piocher jusqu’à 3 cartes. Vous piochez en premier.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
