import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-101",
	localId: 101,

	// Card informations
	name: {
		en: "SP Energy",
		fr: "Énergie SP",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/101/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/101/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {},
		text: {
			fr: "Énergie SP fournit de l'Énergie Colorless. Si le Pokémon auquel Énergie SP est attachée est un Pokémon SP, Énergie SP fournit tous les types d'Énergie mais fournit 1 Énergie à la fois. (Elle ne compte pas comme carte Énergie de base).",
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
