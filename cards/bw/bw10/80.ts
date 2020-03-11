import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Kent Kanetsuna",



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
