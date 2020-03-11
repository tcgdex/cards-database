import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Olympia",
		fr: "Astera",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Échangez votre Pokémon Actif avec l'un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts au Pokémon que vous avez placé sur votre Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
