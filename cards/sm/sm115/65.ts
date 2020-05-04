import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-65",
	localId: 65,

	// Card informations
	name: {
		en: "Sabrina's Suggestion",
		fr: "Suggestion de Morgane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire dévoile sa main. Vous pouvez choisir une carte Supporter que vous y trouvez et utiliser son effet en tant qu’effet de cette carte.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
