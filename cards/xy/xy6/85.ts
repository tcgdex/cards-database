import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-85",
	localId: 85,

	// Card informations
	name: {
		en: "Latios Spirit Link",
		fr: "Lien Spirituel Latios",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/85/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Latios-EX.",
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
