import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-183",
	localId: 183,

	// Card informations
	name: {
		en: "Power Plant",
		fr: "Centrale d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/183/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/183/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/183/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/183/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "aky CG Works",



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon-GX et Pokémon-EX en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
