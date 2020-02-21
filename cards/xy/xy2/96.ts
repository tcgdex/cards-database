import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-96",
	localId: 96,

	// Card informations
	name: {
		en: "Sacred Ash",
		fr: "Cendre Sacrée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 5 Pokémon de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
