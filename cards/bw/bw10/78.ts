import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-78",
	localId: 78,

	// Card informations
	name: {
		en: "Caitlin",
		fr: "Percila",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/78/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/78/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez autant de cartes de votre main que vous voulez en dessous de votre deck dans l'ordre de votre choix. Ensuite, piochez une carte pour chaque carte placée en dessous de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
