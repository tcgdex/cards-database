import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-70",
	localId: 70,

	// Card informations
	name: {
		en: "Ampharos Spirit Link",
		fr: "Lien Spirituel Pharamp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/70/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Pharamp-EX.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
