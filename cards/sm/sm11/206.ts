import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-206",
	localId: 206,

	// Card informations
	name: {
		en: "Reset Stamp",
		fr: "Tampon de Réinitialisation",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/206/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/206/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/206/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/206/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "sadaji",



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire mélange sa main avec son deck et pioche une carte pour chacune des cartes Récompense qu’il lui reste.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
