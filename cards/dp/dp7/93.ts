import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-93",
	localId: 93,

	// Card informations
	name: {
		en: "Switch",
		fr: "Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/93/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/93/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/93/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

