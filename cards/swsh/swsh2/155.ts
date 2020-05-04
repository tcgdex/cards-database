import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-155",

	localId: 155,

	name: {
		en: "Burning Scarf",
	},

	tags: [
	],

	illustrator: "Toyste Beach",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "If the Fire Pokémon this card is attached to is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), the Attacking Pokémon is now Burned.",
	},

}

export default card