import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-157",
	localId: 157,

	// Card informations
	name: {
		en: "Water Memory",
		fr: "ROM Eau",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/157/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/157/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/157/high",
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
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Water.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
