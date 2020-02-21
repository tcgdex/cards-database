import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-212",
	localId: 212,

	// Card informations
	name: {
		en: "Recycle Energy",
		fr: "Énergie Recyclée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/212/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/212/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/212/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/212/high",
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
			fr: "Cette carte fournit de l’Énergie Colorless.\n\nSi cette carte est défaussée du jeu, placez-la dans votre main plutôt que dans la pile de défausse.",
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
