import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-FOUR",
	localId: "FOUR",

	// Card informations
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d'Alpha",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/FOUR/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/FOUR/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/FOUR/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/FOUR/high",
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
			fr: "REGARDEZ TOUTES VOS CARTES RECOMPENSE QUI SONT FACE CACHEE!",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
