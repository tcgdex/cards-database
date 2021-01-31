import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-189",

	localId: 189,

	name: {
		en: "Rose",
	},


	illustrator: "Naoki Saito",

	rarity: Rarity.ULTRARARE, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Attach up to 2 basic Energy cards from your discard pile to 1 of your Pokémon VMAX. If you attached any Energy cards in this way, discard your hand.",
	},

}

export default card