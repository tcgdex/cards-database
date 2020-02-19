import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/107/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/107/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/107/high.png",
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
			fr: "Déplacez 1 carte Énergie de base attachée à 1 de vos Pokémon sur un autre de vos Pokémon.",
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

