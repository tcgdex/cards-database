import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-186",

	localId: 186,

	name: {
		en: "Kabu",
	},


	illustrator: "Hitoshi Ariga",

	rarity: Rarity.ULTRARARE, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Shuffle your hand into your deck. Then, draw 4 cards. If your Active Pokémon is your only Pokémon in play, draw 8 cards instead.",
	},

}

export default card