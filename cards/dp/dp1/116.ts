import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/116/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/116/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Keiji Kinebuchi",



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 des Pokémon de son Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc, si vous en avez.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
