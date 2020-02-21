import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-84",
	localId: 84,

	// Card informations
	name: {
		en: "Professor Juniper",
		fr: "Professeur Keteleeria",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/84/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/84/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
