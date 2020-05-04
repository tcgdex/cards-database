import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-198",
	localId: 198,

	// Card informations
	name: {
		en: "Great Potion",
		fr: "Potion Géniale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/198/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/198/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/198/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/198/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 50 dégâts à votre Pokémon-GX Actif.",
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
