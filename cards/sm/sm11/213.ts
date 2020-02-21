import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-213",
	localId: 213,

	// Card informations
	name: {
		en: "Weakness Guard Energy",
		fr: "Énergie Garde Faiblesse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/213/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/213/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/213/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/213/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless.\n\nLe Pokémon auquel cette carte est attachée n’a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
