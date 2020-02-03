import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-159",
	localId: 159,

	// Card informations
	name: {
		en: "Professor Birch's Observations",
		fr: "Observations du Professeur Seko",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/159/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/159/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/159/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/159/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck et lancez une pièce. Si c'est face, piochez 7 cartes. Si c'est pile, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

