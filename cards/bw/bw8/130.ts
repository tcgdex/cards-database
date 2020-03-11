import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-130",
	localId: 130,

	// Card informations
	name: {
		en: "Victory Piece",
		fr: "Éclat de Victoire",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/130/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/130/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Si cette carte est attachée à Victini-EX, Victini-EX peut utiliser ses attaques indépendamment de la quantité ou du type d'Énergie qui lui est attachée.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
