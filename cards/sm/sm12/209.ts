import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
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

	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: sm
}

export default card
