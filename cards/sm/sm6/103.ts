import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-103",
	localId: 103,

	// Card informations
	name: {
		en: "Bonnie",
		fr: "Clem",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que s’il y a une carte Stade en jeu.\n\nDéfaussez la carte Stade. Pendant ce tour, votre Zygarde-GX peut utiliser son attaque GX même si vous avez déjà utilisé votre attaque GX.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
