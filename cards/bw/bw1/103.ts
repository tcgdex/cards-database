import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 72,
		name: "Daisuke Iwamoto"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, placez l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
