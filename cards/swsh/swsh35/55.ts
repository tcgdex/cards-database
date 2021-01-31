import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-55",

	localId: 55,

	name: {
		en: "Kabu",
	},

	tags: [
	],

	illustrator: "take",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/55/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/55/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Shuffle your hand into your deck. Then, draw 4 cards. If your Active Pokémon is your only Pokémon in play, draw 8 cards instead.",
	},

}

export default card