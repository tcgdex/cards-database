import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-125",
	localId: 125,

	// Card informations
	name: {
		en: "Tormenting Spray",
		fr: "Spray Tourmenteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/125/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/125/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire vous montre cette carte. Si c’est une carte Supporter, défaussez-la.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

