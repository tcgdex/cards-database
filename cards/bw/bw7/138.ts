import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-138",
	localId: 138,

	// Card informations
	name: {
		en: "Crystal Edge",
		fr: "Dague de Cristal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/138/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/138/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/138/high",
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
			fr: "Si cette carte est attachée à Kyurem Blanc-EX, chacune de ses attaques inflige 50 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
