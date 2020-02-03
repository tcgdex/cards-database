import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-137",
	localId: 137,

	// Card informations
	name: {
		en: "Rough Seas",
		fr: "Mer Agitée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/137/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/137/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/137/high.png",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut soigner 30 dégâts à chacun de ses Pokémon Water et de ses Pokémon Lightning.",
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

