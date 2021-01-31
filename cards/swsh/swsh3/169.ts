import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-169",

	localId: 169,

	name: {
		en: "Rose Tower",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Once during each player’s turn, that player may draw cards until they have 3 cards in their hand.",
	},

}

export default card