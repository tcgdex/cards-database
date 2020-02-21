import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-99",
	localId: 99,

	// Card informations
	name: {
		en: "Float Stone",
		fr: "Pierrallégée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/99/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/99/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/99/high",
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
			fr: "Le Pokémon auquel cette carte est attachée n'a pas de coût de Retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
