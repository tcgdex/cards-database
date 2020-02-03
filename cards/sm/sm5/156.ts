import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-156",
	localId: 156,

	// Card informations
	name: {
		en: "Volkner",
		fr: "Tanguy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/156/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/156/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/156/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/156/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Objet et une carte Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

