import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-140",
	localId: 140,

	// Card informations
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/140/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/140/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/140/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/140/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Supporter dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

