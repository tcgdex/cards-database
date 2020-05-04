import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-266",
	localId: 266,

	// Card informations
	name: {
		en: "Lana's Fishing Rod",
		fr: "Canne à Pêche de Néphie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/266/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/266/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/266/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/266/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez un Pokémon et une carte Outil Pokémon de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
