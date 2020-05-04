import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-236",
	localId: 236,

	// Card informations
	name: {
		en: "Wait and See Hammer",
		fr: "Marteau Attends-Voir",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/236/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/236/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/236/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/236/high",
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
			fr: "Vous ne pouvez utiliser cette carte que si vous jouez en second et uniquement pendant votre premier tour. \n\nDéfaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
