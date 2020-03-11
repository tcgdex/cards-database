import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-111",
	localId: 111,

	// Card informations
	name: {
		en: "Lysandre Labs",
		fr: "Labos Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/111/high",
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
			fr: "Les cartes Outil Pokémon en jeu (les vôtres et celles de votre adversaire) n’ont aucun effet.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
