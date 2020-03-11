import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-174",
	localId: 174,

	// Card informations
	name: {
		en: "Giovanni's Exile",
		fr: "Exil de Giovanni",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/174/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/174/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/174/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/174/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez jusqu’à 2 de vos Pokémon de Banc qui n’ont pas de marqueurs de dégâts, ainsi que toutes les cartes qui leur sont attachées.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
