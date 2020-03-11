import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-126",
	localId: 126,

	// Card informations
	name: {
		en: "Shadow Circle",
		fr: "Cercle des Ombres",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/126/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/126/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/126/high",
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
			fr: "Chacun des Pokémon auquel de l'Énergie Darkness est attachée (les vôtres et ceux de votre adversaire) n'a pas de Faiblesse.",
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
