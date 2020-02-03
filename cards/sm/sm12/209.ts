import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-209",
	localId: 209,

	// Card informations
	name: {
		en: "Draw Energy",
		fr: "Énergie de Pioche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/209/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/209/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/209/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/209/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à un Pokémon, piochez une carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

