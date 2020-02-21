import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-68",
	localId: 68,

	// Card informations
	name: {
		en: "Jessie & James",
		fr: "Jessie et James",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/68/high",
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
			fr: "Chaque joueur défausse 2 cartes de sa main. Votre adversaire défausse en premier.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
