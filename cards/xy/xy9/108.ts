import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-108",
	localId: 108,

	// Card informations
	name: {
		en: "Psychic's Third Eye",
		fr: "Troisième Œil du Kinésiste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire montre sa main.\n\nDéfaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
