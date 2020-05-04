import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Enhanced Hammer",
		fr: "Maillet Amélioré",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/94/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/94/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/94/high",
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
			fr: "Défaussez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
