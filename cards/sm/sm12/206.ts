import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-206",
	localId: 206,

	// Card informations
	name: {
		en: "Tag Call",
		fr: "Appel aux Escouades",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/206/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/206/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/206/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/206/high.png",
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
			fr: "Cherchez jusqu’à 2 cartes ESCOUADE dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

