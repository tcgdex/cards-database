import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-95",
	localId: 95,

	// Card informations
	name: {
		en: "Scoop Up Cyclone",
		fr: "Rappel Cyclone",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Placez 1 de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
