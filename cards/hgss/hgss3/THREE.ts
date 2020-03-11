import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss3/THREE/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/THREE/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/THREE/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/THREE/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Milky Isobe",



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
