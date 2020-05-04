import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-88",

	localId: 88,

	name: {
		en: "Lucky Egg",
	},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Nobuyuki Fujimoto",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/88/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/88/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Attach Lucky Egg to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If\nthat Pokémon is Knocked Out, discard this card.",
	},

}

export default card