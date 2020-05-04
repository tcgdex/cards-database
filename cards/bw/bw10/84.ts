import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-84",
	localId: 84,

	// Card informations
	name: {
		en: "Professor Juniper",
		fr: "Professeur Keteleeria",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/84/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/84/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/84/high",
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
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
