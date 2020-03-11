import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Night Pokémon Center",
		fr: "Centre Pokémon de Nuit",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/108/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/108/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/108/high",
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
			fr: "Choisissez 1 de vos Pokémon. Lancez 2 pièces. Si ce sont deux faces, retirez à ce Pokémon tous ses marqueurs de dégât. Si ce sont deux piles, défaussez toutes les cartes Énergie attachées à ce Pokémon.",
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
