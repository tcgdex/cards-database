import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-THREE",
	localId: "THREE",

	// Card informations
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d'Alph",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/THREE/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/THREE/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/THREE/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/THREE/high.png",
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
			fr: "Toutes les cartes Stade en jeu sont restituées dans la main de leur joueur !",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

