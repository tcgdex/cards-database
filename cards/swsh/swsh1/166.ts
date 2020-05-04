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
	localId: 166,


	// Card informations
	name: {
		en: "Hyper Potion",
		fr: "Hyper Potion",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/166/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/166/low",
			},


	},



	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	effect: {
		en: "Heal 120 damage from 1 of your Pokémon that has at least 2 Energy attached. If you healed any damage in this way, discard 2 Energy from it.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card