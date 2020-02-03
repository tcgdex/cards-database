import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-119",
	localId: 119,

	// Card informations
	name: {
		en: "Xerosic",
		fr: "Xanthin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/119/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/119/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Outil Pokémon ou Énergie spéciale attachée à un Pokémon en jeu (les vôtres ou ceux de votre adversaire) et défaussez-la.",
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

