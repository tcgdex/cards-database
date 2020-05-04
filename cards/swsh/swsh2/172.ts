import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-172",

	localId: 172,

	name: {
		en: "Horror Psychic Energy",
	},

	tags: [
	],


	rarity: Rarity.UNCOMMON, 

	category: Category.ENERGY, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Psychic Energy.\n\nIf the Psychic Pokémon this card is attached to is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
	},

}

export default card