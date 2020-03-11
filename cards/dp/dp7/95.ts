import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-95",
	localId: 95,

	// Card informations
	name: {
		en: "Warp Energy",
		fr: "Warp Energy (special Energy)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/95/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/95/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",



	attacks: [{
		name: {},
		text: {
			fr: "Énergie de distorsion fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec 1 des Pokémon de votre Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
