import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-89",

	localId: 89,

	name: {
		en: "Old Amber",
	},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",

	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/89/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/89/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Play Old Amber as if it were a Colorless Basic Pokémon. (Old Amber counts as a Trainer card as well, but if Old Amber is Knocked Out, this counts as a Knocked Out Pokémon.) Old Amber can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Old Amber from play. (This doesn't count as a Knocked Out Pokémon.)",
	},

}

export default card