import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Big Malasada",
		fr: "Malasada Maxi",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/114/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/114/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/114/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/114/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 20 dégâts et retirez un État Spécial de votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

