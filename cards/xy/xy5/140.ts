import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Chacun des Pokémon de base en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
