import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-201",

	localId: 201,

	name: {
		en: "Capture Energy",
	},



	rarity: Rarity.RARE, 

	category: Category.ENERGY, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\n\n \n\nWhen you attach this card from your hand to a Pokémon, search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
	},

}

export default card