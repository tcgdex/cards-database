import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-104",
	localId: 104,

	// Card informations
	name: {
		en: "Team Plasma Badge",
		fr: "Badge de la Team Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/104/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/104/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/104/high",
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
			fr: "Le Pokémon auquel cette carte est attachée est un Pokémon de la Team Plasma.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
