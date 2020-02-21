import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-94",
	localId: 94,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/94/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/94/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
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
