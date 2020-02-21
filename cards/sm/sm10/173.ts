import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-173",
	localId: 173,

	// Card informations
	name: {
		en: "Fire Crystal",
		fr: "Cristal Feu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/173/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/173/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/173/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/173/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 3 cartes Énergie Fire de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
