import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-200",

	localId: 200,

	name: {
		en: "Turbo Patch",
	},


	illustrator: "Toyste Beach",

	rarity: Rarity.RARE, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Basic Pokémon that isn’t a Pokémon-GX.",
	},

}

export default card