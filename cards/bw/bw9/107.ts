import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-107",
	localId: 107,

	// Card informations
	name: {
		en: "Life Dew",
		fr: "Rosée de Vie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/107/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/107/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/107/high.png",
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
			fr: "Si le Pokémon auquel cette carte est attachée est mis K.O., votre adversaire récupère 1 carte Récompense de moins.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

