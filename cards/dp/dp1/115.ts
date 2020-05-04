import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Super Scoop Up",
		fr: "Super rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/115/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/115/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Shizurow",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, reprenez dans votre main 1 de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
