import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-164",
	localId: 164,

	// Card informations
	name: {
		en: "Multi Switch",
		fr: "Échange Multiple",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/164/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/164/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/164/high",
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
			fr: "Déplacez une Énergie de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
