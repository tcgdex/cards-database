import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Blacksmith",
		fr: "Forgeron",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/88/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/88/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/88/high",
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
			fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à l'un de vos Pokémon Fire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
