import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-169",
	localId: 169,

	// Card informations
	name: {
		en: "Peeking Red Card",
		fr: "Coup d’Œil au Carton Rouge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/169/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/169/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/169/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/169/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire dévoile sa main. Vous pouvez demander à votre adversaire de compter les cartes dans sa main, de les mélanger dans son deck, puis de piocher ce même nombre de cartes.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

