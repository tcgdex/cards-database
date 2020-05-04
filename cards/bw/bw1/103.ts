import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Super Scoop Up",
		fr: "Super Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/103/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/103/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: "Daisuke Iwamoto",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, placez l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
