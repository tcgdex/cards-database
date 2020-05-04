import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-102",
	localId: 102,

	// Card informations
	name: {
		en: "Upper Energy",
		fr: "Énergie Sup",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/102/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/102/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Énergie Sup fournit de l'Énergie Colorless. Si vous possédez plus de cartes Récompense que votre adversaire et que cette carte est attachée à un Pokémon (Pokémon LV.X exclus), Énergie Sup fournit de l'Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
