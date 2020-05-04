import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-271",
	localId: 271,

	// Card informations
	name: {
		en: "Draw Energy",
		fr: "Énergie de Pioche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/271/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/271/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/271/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/271/high",
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







	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
