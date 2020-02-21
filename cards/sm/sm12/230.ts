import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-230",
	localId: 230,

	// Card informations
	name: {
		en: "Lillie's Full Force",
		fr: "Pleine Puissance de Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/230/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/230/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/230/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/230/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 202,
		name: "Noriko Uono"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 4 cartes.\n\nÀ la fin de ce tour, si vous avez 3 cartes ou plus dans votre main, mélangez des cartes de votre main avec votre deck jusqu’à avoir 2 cartes dans votre main.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
