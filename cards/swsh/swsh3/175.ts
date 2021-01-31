import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-175",

	localId: 175,

	name: {
		en: "Hiding Darkness Energy",
	},



	rarity: Rarity.UNCOMMON, 

	category: Category.ENERGY, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Darkness Energy.\n\n \n\nThe Darkness Pokémon this card is attached to has no Retreat Cost.",
	},

}

export default card