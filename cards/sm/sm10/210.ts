import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-210",
	localId: 210,

	// Card informations
	name: {
		en: "Janine",
		fr: "Jeannine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/210/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/210/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/210/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/210/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

