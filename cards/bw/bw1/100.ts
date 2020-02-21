import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-100",
	localId: 100,

	// Card informations
	name: {
		en: "Potion",
		fr: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/100/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/100/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 30 dégâts à 1 de vos Pokémon.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
