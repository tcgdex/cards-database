import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Énergie Sup fournit de l'Énergie Colorless. Si vous possédez plus de cartes Récompense que votre adversaire et que cette carte est attachée à un Pokémon (Pokémon LV.X exclus), Énergie Sup fournit de l'Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
