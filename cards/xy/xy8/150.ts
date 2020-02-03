import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-150",
	localId: 150,

	// Card informations
	name: {
		en: "Town Map",
		fr: "Carte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/150/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/150/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/150/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/150/high.png",
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
			fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

