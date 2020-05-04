import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-126",
	localId: 126,

	// Card informations
	name: {
		en: "Looker",
		fr: "Beladonis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/126/high",
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
			fr: "Piochez 3 cartes du dessous de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
