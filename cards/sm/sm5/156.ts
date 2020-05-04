import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm5/156/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/156/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/156/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/156/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "TOKIYA",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Objet et une carte Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
