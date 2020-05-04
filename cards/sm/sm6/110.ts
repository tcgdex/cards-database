import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-110",
	localId: 110,

	// Card informations
	name: {
		en: "Lysandre ◇",
		fr: "Lysandre ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Pour chacun de vos Pokémon Fire en jeu, placez une carte de la pile de défausse de votre adversaire dans la Zone Perdue.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
