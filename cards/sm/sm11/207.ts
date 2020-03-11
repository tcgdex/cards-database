import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-207",
	localId: 207,

	// Card informations
	name: {
		en: "Slumbering Forest",
		fr: "Forêt Sommeillante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/207/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/207/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/207/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/207/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Si un Pokémon est Endormi, son propriétaire lance 2 pièces au lieu d’une pour cet État Spécial entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
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
