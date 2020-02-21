import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-140",
	localId: 140,

	// Card informations
	name: {
		en: "Silent Lab",
		fr: "Labo Silence",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/140/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/140/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/140/high",
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
			fr: "Chacun des Pokémon de base en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
