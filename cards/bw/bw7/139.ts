import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-139",
	localId: 139,

	// Card informations
	name: {
		en: "Crystal Wall",
		fr: "Mur de Cristal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/139/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/139/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/139/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/139/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si cette carte est attachée à Kyurem Noir-EX, ses PV maximum sont de 300.",
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

