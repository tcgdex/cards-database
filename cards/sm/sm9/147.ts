import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-147",
	localId: 147,

	// Card informations
	name: {
		en: "Lavender Town",
		fr: "Lavanville",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/147/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/147/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/147/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/147/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut demander à son adversaire de dévoiler sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
