import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-140",
	localId: 140,

	// Card informations
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/140/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/140/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/140/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Supporter dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
