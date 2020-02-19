import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl2/101/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/101/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



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

