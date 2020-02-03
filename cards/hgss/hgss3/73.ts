import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-73",
	localId: 73,

	// Card informations
	name: {
		en: "Energy Exchanger",
		fr: "Chang'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/73/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/73/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/73/high.png",
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
			fr: "Choisissez une carte Énergie dans votre main, montrez-la à votre adversaire et placez-la sur le dessus de votre deck. Cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

