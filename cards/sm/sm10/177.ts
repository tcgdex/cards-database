import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-177",
	localId: 177,

	// Card informations
	name: {
		en: "Koga's Trap",
		fr: "Piège de Koga",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/177/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/177/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/177/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/177/high",
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
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
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
