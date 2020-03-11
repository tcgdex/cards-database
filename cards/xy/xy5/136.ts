import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-136",
	localId: 136,

	// Card informations
	name: {
		en: "Repeat Ball",
		fr: "Bis Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/136/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/136/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/136/high",
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
			fr: "Cherchez dans votre deck un Pokémon du même nom que l'un de vos Pokémon en jeu, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
