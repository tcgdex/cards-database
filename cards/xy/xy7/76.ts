import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-76",
	localId: 76,

	// Card informations
	name: {
		en: "Level Ball",
		fr: "Niveau Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/76/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/76/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/76/high",
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
			fr: "Cherchez dans votre deck un Pokémon avec 90 PV ou moins, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
