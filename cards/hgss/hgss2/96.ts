import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-96",
	localId: 96,

	// Card informations
	name: {
		fr: "Lithographie d'Alpha",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/96/low.png",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 129,
		name: "Milky Isobe"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Déchaînement",
		code: "hgss2"
	}
}

export default card

