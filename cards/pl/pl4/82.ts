import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-82",

	localId: 82,

	name: {
		en: "Beginning Door",
		fr: "Porte de départ",
	},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/82/low",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/82/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/82/high",
				fr: "https://assets.tcgdex.net/fr/pl/pl4/82/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Search your deck for Arceus, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
	},

}

export default card