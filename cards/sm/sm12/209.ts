import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'
import sm from '../../../sets/sm/sm12'

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
			en: "https://assets.tcgdex.net/en/sm/sm12/209/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/209/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/209/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/209/high",
		},
	},

	tags: [
		Tag.SPECIAL,
	],

	effect: {
		fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à un Pokémon, piochez une carte."
	},

	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: sm
}

export default card
