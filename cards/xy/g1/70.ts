import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-70",
	localId: 70,

	// Card informations
	name: {
		en: "Revitalizer",
		fr: "Revitalisation",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/70/high",
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
			fr: "Ajoutez 2 Pokémon Grass de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
