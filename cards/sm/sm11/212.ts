import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "5ban Graphics",



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
