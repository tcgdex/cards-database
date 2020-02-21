import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Max Revive",
		fr: "Rappel Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/120/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/120/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
