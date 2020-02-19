import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-93",
	localId: 93,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Total Soin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/93/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/93/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/93/high.png",
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
			fr: "Retirez tous les États Spéciaux de votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

