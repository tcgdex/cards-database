import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-171",

	localId: 171,

	name: {
		en: "Struggle Gloves",
	},


	illustrator: "Ryo Ueda",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "If the Pokémon this card is attached to has Weakness to your opponent’s Active Pokémon’s type, its attacks do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
	},

}

export default card