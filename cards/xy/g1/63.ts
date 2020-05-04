import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Imakuni?",
		fr: "Imakuni ?",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Votre Pokémon Actif est maintenant Confus.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
