import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-51",

	localId: 51,

	name: {
		en: "Full Heal",
	},

	tags: [
	],

	illustrator: "Yoshinobu Saito",

	rarity: Rarity.COMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/51/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/51/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Your Active Pokémon recovers from all Special Conditions.",
	},

}

export default card