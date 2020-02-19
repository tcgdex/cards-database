import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-78",
	localId: 78,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Total Soin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/78/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/78/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/78/high.png",
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
			fr: "Retirez tous les États Spéciaux de votre Pokémon Actif.",
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

