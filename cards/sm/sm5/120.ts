import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-120",
	localId: 120,

	// Card informations
	name: {
		en: "Cyrus ◇",
		fr: "Hélio ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez pas jouer cette carte si vous n’avez pas de Pokémon Water ou Metal en jeu.\n\nVotre adversaire choisit 2 Pokémon de Banc et mélange les autres, et toutes les cartes qui leur sont attachées, dans son deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
