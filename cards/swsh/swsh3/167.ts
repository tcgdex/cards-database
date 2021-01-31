import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-167",

	localId: 167,

	name: {
		en: "Rare Fossil",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Play this card as if it were a 70-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play.\n\n \n\nThis card can’t be affected by any Special Conditions, and it can’t retreat.",
	},

}

export default card