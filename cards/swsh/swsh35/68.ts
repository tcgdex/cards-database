import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-68",

	localId: 68,

	name: {
		en: "Turffield Stadium",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Once during each player’s turn, that player may search their deck for an Evolution Grass Pokémon, reveal it, and put it into their hand. Then, that player shuffles their deck.",
	},

}

export default card