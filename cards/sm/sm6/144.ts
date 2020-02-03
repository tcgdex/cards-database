import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-144",
	localId: 144,

	// Card informations
	name: {
		en: "Metal Frying Pan",
		fr: "Poêle Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/144/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/144/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/144/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/144/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon Metal auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance), et il n’a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

