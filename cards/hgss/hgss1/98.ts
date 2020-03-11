import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Pokémon Communication",
		fr: "Communication Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/98/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/98/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/98/high",
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
			fr: "Choisissez un Pokémon dans votre main, montrez-le à votre opposant et placez-le sur le dessus de votre deck. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
