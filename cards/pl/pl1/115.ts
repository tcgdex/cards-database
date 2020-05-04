import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Pokémon Rescue",
		fr: "Rescousse Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/115/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/115/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire et placez-le dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
