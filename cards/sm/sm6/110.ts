import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm6/110/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/110/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



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







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

