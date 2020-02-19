import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-120",
	localId: 120,

	// Card informations
	name: {
		en: "Plumeria",
		fr: "Apocyne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/120/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/120/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/120/high.png",
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
			fr: "Défaussez 2 cartes de votre main. Dans ce cas, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

