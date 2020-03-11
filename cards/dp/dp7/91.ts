import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-91",
	localId: 91,

	// Card informations
	name: {
		en: "Premier Ball",
		fr: "Premier Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/91/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/91/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/91/high",
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
			fr: "Choisissez dans votre deck ou votre pile de défausse un Pokémon NIV.X, montrez-le à votre adversaire et placez-le dans votre main. Si vous cherchez dans votre deck, mélangez-le.",
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
