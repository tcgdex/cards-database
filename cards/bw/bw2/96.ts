import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-96",
	localId: 96,

	// Card informations
	name: {
		en: "Recycle",
		fr: "Recyclage",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/96/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/96/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, placez une carte de votre pile de défausse sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card

