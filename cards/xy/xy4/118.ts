import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-118",
	localId: 118,

	// Card informations
	name: {
		en: "Lysandre's Trump Card",
		fr: "Atout de Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/118/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/118/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur mélange toutes les cartes de sa pile de défausse avec son deck (à part Atout de Lysandre).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
