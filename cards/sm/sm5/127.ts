import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-127",
	localId: 127,

	// Card informations
	name: {
		en: "Looker Whistle",
		fr: "Sifflet de Beladonis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/127/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/127/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 cartes nommées Beladonis dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
