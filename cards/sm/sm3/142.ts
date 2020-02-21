import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-142",
	localId: 142,

	// Card informations
	name: {
		en: "Acerola",
		fr: "Margie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/142/high",
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
			fr: "Placez l’un de vos Pokémon avec des marqueurs de dégâts et toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
