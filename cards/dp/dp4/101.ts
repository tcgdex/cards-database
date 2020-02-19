import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-101",
	localId: 101,

	// Card informations
	name: {
		en: "Premier Ball",
		fr: "Honor ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/101/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/101/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/101/high.png",
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
			fr: "Choisissez dans votre deck ou votre pile de défausse un Pokémon LV.X, montrez-le à votre adversaire et placez-le dans votre main. Si vous cherchez dans votre deck, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

