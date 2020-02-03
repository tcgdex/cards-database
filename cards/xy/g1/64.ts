import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Maintenance",
		fr: "Entretien",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/64/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/64/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/64/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 2 cartes de votre main avec votre deck. (Si vous ne pouvez pas mélanger 2 cartes avec votre deck, vous ne pouvez pas jouer cette carte.) Ensuite, piochez une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

