import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-90",
	localId: 90,

	// Card informations
	name: {
		en: "Poké Healer +",
		fr: "Poké Healer +",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/90/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/90/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer 2 Poké Guérison + en même temps. Si vous jouez 1 Poké Guérison +, retirez à 1 de vos Pokémon Actifs 1 marqueur de dégât et un État Spécial. Si vous jouez 2 Poké Guérison +, retirez à 1 de vos Pokémon Actifs 8 marqueurs de dégât et tous ses États Spéciaux.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
