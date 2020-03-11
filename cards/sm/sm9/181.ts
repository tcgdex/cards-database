import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-181",
	localId: 181,

	// Card informations
	name: {
		en: "Sabrina's Suggestion",
		fr: "Suggestion de Morgane",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/181/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/181/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/181/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/181/high",
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







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
