import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-127",
	localId: 127,

	// Card informations
	name: {
		en: "Aspertia City Gym",
		fr: "Arène de Pavonnay",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/127/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/127/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/127/high.png",
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
			fr: "Ajoute 20 PV à chacun des Pokémon Colorless en jeu (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

