import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-145",
	localId: 145,

	// Card informations
	name: {
		en: "Mysterious Treasure",
		fr: "Trésor Mystérieux",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/145/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/145/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/145/high",
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
			fr: "Défaussez une carte de votre main. Dans ce cas, cherchez un Pokémon Psychic ou Dragon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
