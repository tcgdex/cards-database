import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-147",
	localId: 147,

	// Card informations
	name: {
		en: "Reserved Ticket",
		fr: "Billet Réservé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/147/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/147/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/147/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/147/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck. Mélangez votre deck, puis mettez la carte sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
