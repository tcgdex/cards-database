import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Maintenance",
		fr: "Entretien",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/64/high",
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
			fr: "Mélangez 2 cartes de votre main avec votre deck. (Si vous ne pouvez pas mélanger 2 cartes avec votre deck, vous ne pouvez pas jouer cette carte.) Ensuite, piochez une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
