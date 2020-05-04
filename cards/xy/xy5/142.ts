import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-142",
	localId: 142,

	// Card informations
	name: {
		en: "Weakness Policy",
		fr: "Vulné-Assurance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/142/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/142/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/142/high",
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
			fr: "Le Pokémon auquel cette carte est attachée n'a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
