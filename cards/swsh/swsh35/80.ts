import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-80",

	localId: 80,

	name: {
		en: "Suspicious Food Tin",
	},


	illustrator: "Ryo Ueda",

	rarity: Rarity.RARE, 

	category: Category.TRAINER, 

	set,


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Heal 80 damage from 1 of your Pokémon that has at least 1 Psychic Energy attached. If you healed any damage in this way, discard a Psychic Energy from it.",
	},

}

export default card