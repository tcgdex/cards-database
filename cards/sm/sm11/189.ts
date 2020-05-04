import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-189",
	localId: 189,

	// Card informations
	name: {
		en: "Bug Catcher",
		fr: "Scout",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/189/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/189/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/189/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/189/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Lancez une pièce. Si c’est face, piochez 2 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
