import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-214",
	localId: 214,

	// Card informations
	name: {
		en: "Welder",
		fr: "Soudeuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/214/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/214/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/214/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/214/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez jusqu’à 2 cartes Énergie Fire de votre main à l’un de vos Pokémon. Dans ce cas, piochez 3 cartes.",
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

