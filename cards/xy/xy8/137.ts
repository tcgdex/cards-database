import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-137",
	localId: 137,

	// Card informations
	name: {
		en: "Float Stone",
		fr: "Pierrallégée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/137/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/137/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée n'a pas de Coût de Retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
