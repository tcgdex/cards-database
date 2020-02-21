import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-176",
	localId: 176,

	// Card informations
	name: {
		en: "Janine",
		fr: "Jeannine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/176/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/176/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/176/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/176/high",
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
			fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
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
