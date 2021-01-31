import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-157",

	localId: 157,

	name: {
		en: "Big Parasol",
	},


	illustrator: "Toyste Beach",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "As long as the Pokémon this card is attached to is in the Active Spot, prevent all effects of attacks from your opponent’s Pokémon done to all of your Pokémon. (Existing effects are not removed. Damage is not an effect.)",
	},

}

export default card