import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-114",
	localId: 114,

	// Card informations
	name: {
		en: "Giant Cape",
		fr: "Cape Géante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/114/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/114/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ajoute 20 PV au Pokémon auquel elle est attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
