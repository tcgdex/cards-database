import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-137",
	localId: 137,

	// Card informations
	name: {
		en: "Rough Seas",
		fr: "Mer Agitée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/137/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/137/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut soigner 30 dégâts à chacun de ses Pokémon Water et de ses Pokémon Lightning.",
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
