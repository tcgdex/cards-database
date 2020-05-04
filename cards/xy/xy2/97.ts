import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-97",
	localId: 97,

	// Card informations
	name: {
		en: "Startling Megaphone",
		fr: "Mégaphone Surprise",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/97/high",
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
			fr: "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
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
