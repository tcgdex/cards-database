import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Skyarrow Bridge",
		fr: "Pont Sagiciel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/91/high",
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
			fr: "Le coût de Retraite de chaque Pokémon de base en jeu est diminué de Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
