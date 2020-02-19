import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-118",
	localId: 118,

	// Card informations
	name: {
		en: "Ancient Crystal",
		fr: "Cristal Antique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/118/high.png",
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
			fr: "Le Regirock, Regice, Registeel ou Regigigas auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

