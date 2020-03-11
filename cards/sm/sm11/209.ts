import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-209",
	localId: 209,

	// Card informations
	name: {
		en: "Tag Switch",
		fr: "Échange d’Escouade",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/209/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/209/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/209/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/209/high",
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
			fr: "Déplacez jusqu’à 2 Énergies de l’un de vos Pokémon ESCOUADE vers un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
