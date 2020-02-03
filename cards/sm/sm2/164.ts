import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-164",
	localId: 164,

	// Card informations
	name: {
		en: "Max Potion",
		fr: "Potion Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/164/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/164/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/164/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/164/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez tous les dégâts de l’un de vos Pokémon. Dans ce cas, défaussez toutes les Énergies attachées à ce Pokémon.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

