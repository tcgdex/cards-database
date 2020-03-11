import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-72",
	localId: 72,

	// Card informations
	name: {
		en: "Dual Ball",
		fr: "Double boule",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/72/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/72/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Takashi Yamaguchi",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon de base dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Dans ce cas, mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
