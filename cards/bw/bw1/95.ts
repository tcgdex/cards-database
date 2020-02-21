import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Total Soin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Retirez tous les États Spéciaux de votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
