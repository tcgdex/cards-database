import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Protection Cube",
		fr: "Cube Protecteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques qu'il utilise.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
