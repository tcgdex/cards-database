import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-134",
	localId: 134,

	// Card informations
	name: {
		en: "Brigette",
		fr: "Juliette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/134/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/134/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez 1 Pokémon-EX de base ou 3 Pokémon de base dans votre deck (à part les Pokémon-EX) et placez-les sur votre Banc. Mélangez ensuite votre deck.",
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
