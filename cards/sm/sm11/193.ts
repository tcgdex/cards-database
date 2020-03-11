import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-193",
	localId: 193,

	// Card informations
	name: {
		en: "Dark City",
		fr: "Sombreville",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/193/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/193/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/193/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/193/high",
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
			fr: "Les Pokémon Darkness de base en jeu (les vôtres et ceux de votre adversaire) n’ont pas de Coût de Retraite.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
