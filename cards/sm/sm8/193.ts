import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-193",
	localId: 193,

	// Card informations
	name: {
		en: "Whitney",
		fr: "Blanche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/193/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/193/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/193/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/193/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez une carte. Ensuite, piochez 2 cartes pour chaque Blanche supplémentaire dans votre pile de défausse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

