import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-161",
	localId: 161,

	// Card informations
	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/161/high",
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
			fr: "Défaussez 2 cartes de votre main. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
