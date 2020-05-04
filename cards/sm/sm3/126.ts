import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-126",
	localId: 126,

	// Card informations
	name: {
		en: "Weakness Policy",
		fr: "Vulné-Assurance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée n’a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
