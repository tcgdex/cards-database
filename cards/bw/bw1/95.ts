import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Total Soin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Retirez tous les États Spéciaux de votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
