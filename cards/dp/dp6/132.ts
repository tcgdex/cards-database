import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-132",
	localId: 132,

	// Card informations
	name: {
		en: "Energy Pickup",
		fr: "Collecte d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/132/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/132/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/132/high",
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
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 de vos Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
