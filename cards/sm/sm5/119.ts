import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-119",
	localId: 119,

	// Card informations
	name: {
		en: "Cynthia",
		fr: "Cynthia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/119/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
