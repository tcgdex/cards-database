import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-93",

	localId: 93,

	name: {
		en: "Helix Fossil",
	},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",

	rarity: Rarity.COMMON, 

	category: Category.TRAINER, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/93/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/93/high",
			},

	},


	// Card Pokémon Informations











	// Card Trainer/Energy informations
	effect: {
		en: "Play Helix Fossil as if it were a Colorless Basic Pokémon. (Helix Fossil counts as a Trainer card as well, but if Helix Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Helix Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Helix Fossil from play. (This doesn't count as a Knocked Out Pokémon.)",
	},

}

export default card