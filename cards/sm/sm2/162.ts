import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-162",
	localId: 162,

	// Card informations
	name: {
		en: "Enhanced Hammer",
		fr: "Maillet Amélioré",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/162/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
