import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-140",
	localId: 140,

	// Card informations
	name: {
		en: "Gold Potion",
		fr: "Potion d'Or",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/140/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/140/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/140/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 90 dégâts à votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
