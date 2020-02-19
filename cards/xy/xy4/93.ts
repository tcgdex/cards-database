import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-93",
	localId: 93,

	// Card informations
	name: {
		en: "Dimension Valley",
		fr: "Vallée Dimensionnelle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/93/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/93/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/93/high.png",
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
			fr: "Les attaques de chaque Pokémon Psychic (les vôtres et ceux de votre adversaire) coûtent Colorless de moins.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

