import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-144",
	localId: 144,

	// Card informations
	name: {
		en: "Hau",
		fr: "Tili",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/144/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/144/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/144/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/144/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

