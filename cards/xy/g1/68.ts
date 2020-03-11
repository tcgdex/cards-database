import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Pokémon Center Lady",
		fr: "Dame du Centre Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Maiko Fujiwara",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 60 dégâts et retirez tous les États Spéciaux de l'un de vos Pokémon.",
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
