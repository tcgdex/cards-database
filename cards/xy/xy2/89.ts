import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Fiery Torch",
		fr: "Flambeau Incandescent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/89/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/89/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/89/high",
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
			fr: "Défaussez une carte Énergie Fire de votre main. (Si vous ne pouvez pas défausser une carte Énergie Fire, vous ne pouvez pas jouer cette carte.) Piochez 2 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
