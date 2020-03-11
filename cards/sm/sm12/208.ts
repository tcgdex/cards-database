import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-208",
	localId: 208,

	// Card informations
	name: {
		en: "Will",
		fr: "Clément",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/208/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/208/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/208/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/208/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "La prochaine fois que vous lancez des pièces en raison de l’effet d’une attaque, d’un talent ou d’une carte Dresseur pendant ce tour, choisissez pile ou face pour le premier lancer de pièce.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
