import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-114",
	localId: 114,

	// Card informations
	name: {
		en: "Giant Cape",
		fr: "Cape Géante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/114/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/114/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ajoute 20 PV au Pokémon auquel elle est attachée.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
