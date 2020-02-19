import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-145",
	localId: 145,

	// Card informations
	name: {
		en: "Mallow",
		fr: "Barbara",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/145/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/145/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/145/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/145/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez 2 cartes dans votre deck. Mélangez votre deck, puis placez ces cartes, dans n’importe quel ordre, sur le dessus de votre deck.",
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

