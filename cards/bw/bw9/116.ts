import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-116",
	localId: 116,

	// Card informations
	name: {
		en: "Professor Juniper",
		fr: "Professeur Keteleeria",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/116/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/116/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
