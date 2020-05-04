import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-86",

	localId: 86,

	name: {
		en: "Energy Restore",
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
				en: "https://assets.tcgdex.net/en/pl/pl4/86/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/86/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Flip 3 coins. For each heads, put a basic Energy card from your discard pile into your hand. If you don't have that many basic Energy cards in your discard pile, put all of them into your hand.",
	},

}

export default card