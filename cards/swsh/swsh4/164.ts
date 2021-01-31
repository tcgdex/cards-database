import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-164",

	localId: 164,

	name: {
		en: "Stone Fighting Energy",
	},



	rarity: Rarity.UNCOMMON, 

	category: Category.ENERGY, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Fighting Energy.\n\n\n\n \n\n\n\nThe Fighting Pokémon this card is attached to takes 20 less damage from attacks from your opponent’s Pokémon (after applying Weakness and Resistance).",
	},

}

export default card