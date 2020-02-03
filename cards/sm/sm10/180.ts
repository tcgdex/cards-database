import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-180",
	localId: 180,

	// Card informations
	name: {
		en: "Metal Core Barrier",
		fr: "Barrière de Métal Renforcé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/180/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/180/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/180/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/180/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 121,
		name: "Studio Bora Inc."
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si cette carte est attachée à l’un de vos Pokémon, défaussez-la à la fin du tour de votre adversaire.\n\nLe Pokémon Metal auquel cette carte est attachée subit 70 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

