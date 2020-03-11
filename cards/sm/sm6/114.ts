import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-114",
	localId: 114,

	// Card informations
	name: {
		en: "Ultra Recon Squad",
		fr: "Ultra-Commando",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/114/high",
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
			fr: "Défaussez jusqu’à 2 cartes Ultra-Chimère de votre main. Piochez 3 cartes pour chaque carte défaussée de cette façon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
