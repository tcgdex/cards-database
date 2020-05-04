import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-191",
	localId: 191,

	// Card informations
	name: {
		en: "Cherish Ball",
		fr: "Mémoire Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/191/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/191/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/191/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon-GX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
