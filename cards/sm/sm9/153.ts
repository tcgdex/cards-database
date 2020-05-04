import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-153",
	localId: 153,

	// Card informations
	name: {
		en: "Return Label",
		fr: "Adresse de Retour",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/153/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/153/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Placez une carte de la pile de défausse de votre adversaire en dessous de son deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
