import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-85",
	localId: 85,

	// Card informations
	name: {
		en: "Revive",
		fr: "Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/85/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/85/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

