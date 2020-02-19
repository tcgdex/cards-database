import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-82",
	localId: 82,

	// Card informations
	name: {
		en: "Beginning Door",
		fr: "Porte de départ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/82/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/82/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/82/high.png",
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
			fr: "Cherchez Arceus dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card

