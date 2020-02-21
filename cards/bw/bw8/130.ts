import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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
