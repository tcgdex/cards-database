import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-101",
	localId: 101,

	// Card informations
	name: {
		en: "Premier Ball",
		fr: "Honor ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/101/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/101/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/101/high",
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
			fr: "Choisissez dans votre deck ou votre pile de défausse un Pokémon LV.X, montrez-le à votre adversaire et placez-le dans votre main. Si vous cherchez dans votre deck, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
