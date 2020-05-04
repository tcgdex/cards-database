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
	localId: 156,


	// Card informations
	name: {
		en: "Air Balloon",
		fr: "Ballon",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/156/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/156/low",
			},


	},



	tags: [
		Tag.TOOL,
	],

	illustrator: "Yoshinobu Saito",



	effect: {
		en: "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card