import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-131",
	localId: 131,

	// Card informations
	name: {
		en: "Groudon Spirit Link",
		fr: "Lien Spirituel Groudon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/131/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/131/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/131/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient Primo-Groudon-EX.",
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
