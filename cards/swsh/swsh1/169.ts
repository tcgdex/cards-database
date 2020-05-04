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
	localId: 169,


	// Card informations
	name: {
		en: "Marnie",
		fr: "Rosemary",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/169/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/169/low",
			},


	},



	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	effect: {
		en: "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, you draw 5 cards, and your opponent draws 4 cards.",
	},




	rarity: Rarity.RARE, 

	category: Category.TRAINER, 


	set,
}

export default card