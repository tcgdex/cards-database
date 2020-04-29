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
	localId: 168,


	// Card informations
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/168/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/168/low",
			},


	},



	tags: [
		Tag.TOOL,
	],

	illustrator: "Yoshinobu Saito",



	effect: {
		en: "At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card.",
	},




	rarity: Rarity.Uncommon, 

	category: Category.TRAINER, 


	set,
}

export default card