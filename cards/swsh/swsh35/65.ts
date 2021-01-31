import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-65",

	localId: 65,

	name: {
		en: "Sonia",
	},

	tags: [
	],

	illustrator: "Yusuke Ohmura",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/65/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/65/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Search your deck for up to 2 Basic Pokémon or up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
	},

}

export default card