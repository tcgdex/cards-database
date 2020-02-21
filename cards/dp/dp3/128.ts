import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-128",
	localId: 128,

	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/128/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/128/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/128/high",
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
			fr: "Échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
