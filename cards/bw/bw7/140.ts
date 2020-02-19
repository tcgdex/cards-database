import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-140",
	localId: 140,

	// Card informations
	name: {
		en: "Gold Potion",
		fr: "Potion d'Or",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/140/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/140/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/140/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/140/high.png",
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
			fr: "Soignez 90 dégâts à votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

