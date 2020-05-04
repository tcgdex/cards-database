import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-174",

	localId: 174,

	name: {
		en: "Twin Energy",
	},

	tags: [
	],


	rarity: Rarity.UNCOMMON, 

	category: Category.ENERGY, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "As long as this card is attached to a Pokémon that isn't a Pokémon V or a Pokémon-GX, it provides ColorlessColorless Energy. \n\nIf this card is attached to a Pokémon V or a Pokémon-GX, it provides Colorless Energy instead.",
	},

}

export default card