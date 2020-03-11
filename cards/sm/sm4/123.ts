import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-123",
	localId: 123,

	// Card informations
	name: {
		en: "Warp Energy",
		fr: "Énergie de Distorsion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
