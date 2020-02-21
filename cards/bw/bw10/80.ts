import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-80",
	localId: 80,

	// Card informations
	name: {
		en: "Energy Retrieval",
		fr: "Récupération d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/80/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/80/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
