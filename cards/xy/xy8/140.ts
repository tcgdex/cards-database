import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-140",
	localId: 140,

	// Card informations
	name: {
		en: "Heavy Ball",
		fr: "Masse Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/140/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/140/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/140/high",
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
			fr: "Cherchez dans votre deck un Pokémon avec un Coût de Retraite de 3 ou plus, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
