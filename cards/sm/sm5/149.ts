import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-149",
	localId: 149,

	// Card informations
	name: {
		en: "Gardenia",
		fr: "Flo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/149/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/149/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/149/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "You Iribi",



	attacks: [{
		name: {},
		text: {
			fr: "Soignez 80 dégâts à l’un de vos Pokémon auquel de l’Énergie Grass est attachée.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
