import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-84",
	localId: 84,

	// Card informations
	name: {
		en: "Professor Oak's Hint",
		fr: "Indice du Prof. Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/84/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/84/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/84/high.png",
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
			fr: "Piochez des cartes jusqu'à ce que vous ayez 7 cartes en main. Votre tour se termine.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

