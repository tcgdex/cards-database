import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-132",
	localId: 132,

	// Card informations
	name: {
		en: "Kyogre Spirit Link",
		fr: "Lien Spirituel Kyogre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/132/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/132/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/132/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient Primo-Kyogre-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
