import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-130",
	localId: 130,

	// Card informations
	name: {
		en: "Mt. Coronet",
		fr: "Mont Couronné",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/130/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/130/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/130/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/130/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut placer 2 cartes Énergie Metal de sa pile de défausse dans sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

