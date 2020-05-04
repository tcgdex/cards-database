import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Eneporter",
		fr: "Énéporteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/106/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/106/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez une Énergie spéciale de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
