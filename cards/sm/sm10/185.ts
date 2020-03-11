import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-185",
	localId: 185,

	// Card informations
	name: {
		en: "Samson Oak",
		fr: "Raphaël Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/185/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/185/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/185/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/185/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Si les deux Pokémon Actifs sont du même type, piochez 2 cartes supplémentaires.",
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
