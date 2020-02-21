import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-94",
	localId: 94,

	// Card informations
	name: {
		en: "Cyclone Energy",
		fr: "Cyclone Energy (special Energy)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/94/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/94/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Énergie Cyclone fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon de Banc à échanger.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
