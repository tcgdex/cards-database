import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-85",
	localId: 85,

	// Card informations
	name: {
		en: "Great Ball",
		fr: "Great Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/85/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/85/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
