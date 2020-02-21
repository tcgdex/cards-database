import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-74",
	localId: 74,

	// Card informations
	name: {
		en: "Forest of Giant Plants",
		fr: "Forêt de Plantes Géantes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon Grass de chaque joueur peuvent évoluer pendant son premier tour ou pendant le tour où il joue les Pokémon concernés.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
