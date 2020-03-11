import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-92",
	localId: 92,

	// Card informations
	name: {
		en: "Fossil Researcher",
		fr: "Chercheur de Fossiles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une combinaison de jusqu'à 2 Amagara ou Ptyranidur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
