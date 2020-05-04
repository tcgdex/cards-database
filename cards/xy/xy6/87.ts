import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-87",
	localId: 87,

	// Card informations
	name: {
		en: "Rayquaza Spirit Link",
		fr: "Lien Spirituel Rayquaza",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/87/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Rayquaza-EX.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
