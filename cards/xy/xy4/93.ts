import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy4/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques de chaque Pokémon Psychic (les vôtres et ceux de votre adversaire) coûtent Colorless de moins.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
