import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-131",
	localId: 131,

	// Card informations
	name: {
		en: "Order Pad",
		fr: "Terminal de Commande",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/131/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/131/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
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
