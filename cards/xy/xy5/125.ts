import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-125",
	localId: 125,

	// Card informations
	name: {
		en: "Dive Ball",
		fr: "Scuba Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/125/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/125/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/125/high",
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
			fr: "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
