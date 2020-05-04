import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swsh1'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `${set.code}-${localId}`,
	localId: 159,


	// Card informations
	name: {
		en: "Crushing Hammer",
		fr: "Maillet Écrasant",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/159/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/159/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "sadaji",



	effect: {
		en: "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card