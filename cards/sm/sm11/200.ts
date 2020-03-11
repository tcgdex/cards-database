import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-200",
	localId: 200,

	// Card informations
	name: {
		en: "Hapu",
		fr: "Paulie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/200/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/200/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/200/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/200/high",
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
			fr: "Regardez les 6 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Défaussez les autres cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
