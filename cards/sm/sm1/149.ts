import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-149",
	localId: 149,

	// Card informations
	name: {
		en: "Team Skull Grunt",
		fr: "Sbire de la Team Skull",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/149/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/149/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/149/high",
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
			fr: "Votre adversaire dévoile sa main. Défaussez-en 2 cartes Énergie.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
