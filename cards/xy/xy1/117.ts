import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Fairy Garden",
		fr: "Jardin des Fées",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/117/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/117/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/117/high",
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
			fr: "Chacun des Pokémon auquel de l'Énergie Fairy est attachée (les vôtres et ceux de votre adversaire) n'a pas de Coût de Retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
