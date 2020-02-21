import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-139",
	localId: 139,

	// Card informations
	name: {
		en: "Electrocharger",
		fr: "Électrochargeur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/139/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/139/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/139/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, mélangez une carte Électropuissance de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
