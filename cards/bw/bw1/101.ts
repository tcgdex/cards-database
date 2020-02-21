import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-101",
	localId: 101,

	// Card informations
	name: {
		en: "Professor Juniper",
		fr: "Professeur Keteleeria",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/101/high",
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
			fr: "Défaussez votre main et piochez 7 cartes.",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu’une seule carte Supporter pendant votre tour (avant votre attaque).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
