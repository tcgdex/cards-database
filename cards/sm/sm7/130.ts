import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-130",
	localId: 130,

	// Card informations
	name: {
		en: "Fisherman",
		fr: "Pêcheur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/130/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/130/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 4 cartes Énergie de base de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
