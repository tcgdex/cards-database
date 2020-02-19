import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-89",
	localId: 89,

	// Card informations
	name: {
		en: "Poké Drawer +",
		fr: "Poké Drawer +",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/89/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/89/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/89/high.png",
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
			fr: "Vous pouvez jouer 2 Poké Pioche + en même temps. Si vous jouez 1 Poké Pioche +, piochez une carte. Si vous jouez 2 Poké Pioche +, choisissez jusqu'à 2 cartes dans votre deck et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

