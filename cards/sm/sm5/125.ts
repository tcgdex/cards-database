import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-125",
	localId: 125,

	// Card informations
	name: {
		en: "Lillie",
		fr: "Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/125/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/125/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main. Si c’est votre premier tour, piochez des cartes jusqu’à ce que vous ayez 8 cartes en main.",
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

