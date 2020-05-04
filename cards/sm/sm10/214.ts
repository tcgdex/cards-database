import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-214",
	localId: 214,

	// Card informations
	name: {
		en: "Welder",
		fr: "Soudeuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/214/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/214/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/214/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/214/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez jusqu’à 2 cartes Énergie Fire de votre main à l’un de vos Pokémon. Dans ce cas, piochez 3 cartes.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
