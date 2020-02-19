import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Double Full Heal",
		fr: "Double guérison totale",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/105/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/105/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/105/high.png",
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
			fr: "Retirez à chacun de vos Pokémon Actifs tous leurs États Spéciaux.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

