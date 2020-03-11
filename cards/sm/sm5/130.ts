import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-130",
	localId: 130,

	// Card informations
	name: {
		en: "Mt. Coronet",
		fr: "Mont Couronné",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/130/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/130/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut placer 2 cartes Énergie Metal de sa pile de défausse dans sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
